import Footer from "../components/Footer";
import "../App.css"
const Diagrama = () => {
    return (
        <main className="flex" style={{flexDirection:"column", flexWrap:"noWrap", backgroundColor:"#0f0f0f"}}>
            <h1 className="white-bg" style={{color:"white", padding: "1rem", margin:"1rem"}}>Árbol de Renderizado</h1>
            <iframe src="/RenderDiagram.drawio.html" style={{height:"50vh",width:"100%"}}></iframe>
            <h1 className="white-bg" style={{color:"white", padding: "1rem", margin:"1rem"}}>Organización de Carpetas:</h1>
            <pre style={{
                whiteSpace: "pre",
                fontFamily: "monospace",
                backgroundColor: "#0d1117",
                color: "#c9d1d9",
                margin:"0 1rem",
                padding: "1rem",
                borderRadius: "8px",
                overflowX: "auto"
                }}>
            {`  src/
├── App.css
├── App.jsx
├── assets
│   └── img
│       ├── carlina.png
│       ├── chikis.jpg
│       ├── cropped-Designer.jpeg
│       ├── gonzalo-profile.jpg
│       ├── kity.jpeg
│       ├── lean_bg.jpg
│       ├── logo_ba__buenos_aires_ciudad.png
│       ├── pexels-bibekghosh-14553705.jpg
│       ├── pexels-markusspiske-2764993.jpg
│       └── test.jpg
├── Bitacora
│   ├── Article.jsx
│   ├── bitacora.css
│   └── reuniones.json
├── components
│   ├── ClimaPreview.jsx
│   ├── Footer.jsx
│   ├── Ifts.jsx
│   ├── Img.jsx
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   ├── NoticiasPreview.jsx
│   ├── Sidebar.jsx
│   └── ToggleButton.jsx
├── erika
│   ├── About.jsx
│   ├── Actions.jsx
│   ├── Contact.jsx
│   ├── data.js
│   ├── erika.css
│   ├── Favorites.jsx
│   ├── Music.jsx
│   ├── Nav.jsx
│   └── Skills.jsx
├── gonza
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── data.js
│   ├── gonza.css
│   ├── Hero.jsx
│   ├── Movies.jsx
│   ├── Music.jsx
│   ├── Nav.jsx
│   └── Skills.jsx
├── index.css
├── lean
│   ├── About.jsx
│   ├── Card.jsx
│   ├── habilidades.json
│   ├── Info.jsx
│   ├── lean.css
│   ├── Musica.jsx
│   ├── Peliculas.jsx
│   └── resources
│       └── songs
│           ├── coldplay.webm
│           ├── ghost.webm
│           └── linkinpark.webm
├── main.jsx
├── mariano
│   ├── Curiosity.jsx
│   ├── data.js
│   ├── Hero.jsx
│   ├── Interests.jsx
│   ├── mariano.css
│   ├── Nav.jsx
│   ├── Philosophy.jsx
│   ├── Quote.jsx
│   └── Skills.jsx
├── pages
│   ├── apiSections.css
│   ├── Bitacora.jsx
│   ├── Clima.jsx
│   ├── Diagrama.jsx
│   ├── Diagram.drawio.svg
│   ├── Erika.jsx
│   ├── Gonza.jsx
│   ├── Home.jsx
│   ├── Layout.jsx
│   ├── Lean.jsx
│   ├── Mariano.jsx
│   ├── Noticias.jsx
│   ├── Peliculas.jsx
│   ├── RenderDiagram.drawio.html
├── portada
│   ├── Card.jsx
│   ├── Integrantes.jsx
│   ├── portada.css
│   └── Welcome.jsx
└── seccionPeliculas
    ├── data.json
    └── peliculas.css`}
                </pre>

            <Footer/>
        </main>
    );
}

export default Diagrama;