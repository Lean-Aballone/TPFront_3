import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import Footer from "../components/Footer.jsx";
import "../seccionPeliculas/peliculas.css";

export default function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPeliculas(data))
      .catch((err) => console.error("Error al cargar JSON:", err));
  }, []);

  useEffect(() => {
    const lastPage = Math.max(0, Math.ceil(peliculas.length / itemsPerPage) - 1);
    if (currentPage > lastPage) setCurrentPage(lastPage);
  }, [peliculas, currentPage]);

  const totalPages = Math.ceil(peliculas.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const paginated = peliculas.slice(startIndex, startIndex + itemsPerPage);

  function prevPage() {
    setCurrentPage((p) => Math.max(0, p - 1));
  }

  function nextPage() {
    setCurrentPage((p) => Math.min(Math.max(0, totalPages - 1), p + 1));
  }

  return (
    <div style={{ width: "100%", backgroundColor: "#0f0f0f" }}>
      <div className="app">
        <h1 className="white-bg sideMargin">Listado de Películas:</h1>

        <div
          className="sideMargin"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <div>
            <button onClick={prevPage} disabled={currentPage === 0} aria-label="Anterior">
              Anterior
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage >= Math.max(0, totalPages - 1)}
              style={{ marginLeft: 8 }}
              aria-label="Siguiente"
            >
              Siguiente
            </button>
          </div>

          <div className="white-bg" style={{ padding: "6px 10px", borderRadius: 4 }}>
            Página {totalPages === 0 ? 0 : currentPage + 1} de {totalPages}
          </div>
        </div>

        <div className="grid white-bg sideMargin">
          {paginated.map((peli) => (
            <MovieCard key={peli.id} {...peli} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}