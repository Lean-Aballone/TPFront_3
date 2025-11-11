export default function Img ({src, alt}){

    return (
        <img src={src} alt={alt} style={{display:"block", aspectRatio:"1/1", height:"fit-content", maxWidth:"100%", minWidth:"0", flex:"0 1 250px"}}/>
    );
}