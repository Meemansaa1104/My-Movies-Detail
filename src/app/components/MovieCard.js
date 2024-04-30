import React from 'react';

const MovieCard = ({ movie, darkMode }) => {
  const { movietitle, moviemainphotos, movielanguages, moviecountries, moviegenres } = movie;

  return (
    <div className={`flex flex-col items-center justify-center p-4 mt-1 rounded-lg shadow-md hover:cursor-pointer hover:p-6 ${darkMode ? 'bg-gray-800 text-white hover:bg-slate-600' : 'bg-gray-200 text-black hover:bg-slate-300'}`}>
      <img src={moviemainphotos} alt={movietitle} className="w-full mb-4 rounded-lg" />
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">{movietitle}</h2>
        <p>Language: {movielanguages.join(', ')}</p>
        <p>Country: {moviecountries.join(', ')}</p>
        <p>Genre: {moviegenres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
