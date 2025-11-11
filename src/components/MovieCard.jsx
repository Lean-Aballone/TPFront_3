import React from "react";

export default function MovieCard({ titulo, anio, genero, director, poster, descripcion, rating }) {
  return (
    <div className="card">
      <img src={poster} alt={titulo} className="poster" />
      <div className="card-body">
        <h2>{titulo}</h2>
        <p className="anio">{anio} • {genero}</p>
        <p className="descripcion">{descripcion}</p>
        <p className="director">Dirigida por: {director}</p>
        <span className="rating">⭐ {rating}</span>
      </div>
    </div>
  );
}
