import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, darkMode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {movies.map(movie => (
        <MovieCard key={movie.imdbmovieid} movie={movie} darkMode={darkMode} />
      ))}
    </div>
  );
};

export default MovieList;
