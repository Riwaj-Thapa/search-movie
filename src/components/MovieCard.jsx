import React from "react";
import "../css/MovieCard.css"; // Assuming you have a CSS file for styling
import { useMovieContext } from "../contexts/MovieContext";
const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const isFav = isFavorite(movie.id);

  const handleClick = (e) => {
    e.preventDefault();
    if (isFav) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay"></div>
        <button
          className={`favorite-btn ${isFav ? "active" : ""} `}
          onClick={handleClick}
        >
          ♥
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
