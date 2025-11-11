import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import Footer from "../components/Footer.jsx";
import "../seccionPeliculas/peliculas.css";

export default function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPeliculas(data))
      .catch((err) => console.error("Error al cargar JSON:", err));
  }, []);

  return (
    <div style={{width:"100%", backgroundColor:"#0f0f0f"}}>
        <div className="app">
        <h1 className="white-bg sideMargin">Listado de Películas:</h1>
        <div className="grid white-bg sideMargin">
            {peliculas.map((peli) => (
            <MovieCard key={peli.id} {...peli} />
            ))}
        </div>
        <Footer />
        </div>
    </div>
  );
}
