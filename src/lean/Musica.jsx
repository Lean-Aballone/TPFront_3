import { useState, useEffect, useRef } from "react";

export default function Musica({ id, name, className, src }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const handleGlobalStop = () => {
            const a = audioRef.current;
            if (a) {
                a.pause();
                a.currentTime = 0;
                setIsPlaying(false);
            }
        };

        window.addEventListener("musica:stop", handleGlobalStop);

        return () => {
            window.removeEventListener("musica:stop", handleGlobalStop);
        };
    }, []);

    useEffect(() => {
        const a = audioRef.current;
        if (!a) return;

        const onEnded = () => {
            setIsPlaying(false);
            a.currentTime = 0;
        };

        const onError = (e) => {
            console.error("Audio error:", e);
            setIsPlaying(false);
        };

        a.addEventListener("ended", onEnded);
        a.addEventListener("error", onError);

        return () => {
            a.removeEventListener("ended", onEnded);
            a.removeEventListener("error", onError);
        };
    }, [src]); // si cambia la src, re-attach listeners al nuevo elemento

    const handleKeyPress = (event) => {
        if (event.key === "Enter" || event.key === " "){
            handleClick();
        }
    };
    const handleClick = () => {
        const a = audioRef.current;
        if (!a) return;

        if (isPlaying) {
            a.pause();
            a.currentTime = 0;
            setIsPlaying(false);
        } else {
            // avisar a los otros componentes para que se detengan
            window.dispatchEvent(new CustomEvent("musica:stop"));

            a.play().catch((err) => {
                console.error("Error al reproducir el audio:", err);
                setIsPlaying(false);
            });

            setIsPlaying(true);
        }
    };

    return (
        <p
            tabIndex={0}
            id={id}
            className={`${className || ""} playable-song cursor-pointer select-none ${isPlaying ? "playing" : ""}`}
            title={isPlaying ? "Click para detener" : "Click para escuchar una canción"}
            onClick={handleClick}
            onKeyDown={handleKeyPress}
            style={{ cursor: "pointer" }}
        >
            {name}{" "}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width="20"
                height="20"
                style={{ verticalAlign: "middle"}}
            >
                <path d="M532 71C539.6 77.1 544 86.3 544 96L544 400C544 444.2 501 480 448 480C395 480 352 444.2 352 400C352 355.8 395 320 448 320C459.2 320 470 321.6 480 324.6L480 207.9L256 257.7L256 464C256 508.2 213 544 160 544C107 544 64 508.2 64 464C64 419.8 107 384 160 384C171.2 384 182 385.6 192 388.6L192 160C192 145 202.4 132 217.1 128.8L505.1 64.8C514.6 62.7 524.5 65 532.1 71.1z" />
            </svg>
            <span className={!isPlaying ? "hidden" : ""} style={{ whiteSpace: "nowrap" }}>
                {isPlaying ? " Click to stop" : " Click to play"}
            </span>
            <audio ref={audioRef} src={src} preload="auto" />
        </p>
    );
}