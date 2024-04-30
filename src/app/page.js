"use client"

import React, { useState, useEffect } from 'react';
import FilterOptions from "./components/FilterOptions";
import MovieList from './components/MovieList';

const IndexPage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch movies data from the JSON file
    fetchMovies();
  }, []);

  useEffect(() => {
    filterMovies();
  }, [languageFilter, countryFilter, genreFilter]);

  const fetchMovies = async () => {
    try {
      const res = await fetch('/movies.json.txt'); // Path to your JSON file
      const data = await res.json();
      setMovies(data);
      setFilteredMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const filterMovies = () => {
    let filtered = [...movies];
    if (languageFilter) {
      filtered = filtered.filter(movie => movie.movielanguages.includes(languageFilter));
    }
    if (countryFilter) {
      filtered = filtered.filter(movie => movie.moviecountries.includes(countryFilter));
    }
    if (genreFilter) {
      filtered = filtered.filter(movie => movie.moviegenres.includes(genreFilter));
    }
    setFilteredMovies(filtered);
  };

  const handleLanguageChange = e => {
    setLanguageFilter(e.target.value);
  };

  const handleCountryChange = e => {
    setCountryFilter(e.target.value);
  };

  const handleGenreChange = e => {
    setGenreFilter(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <button className="absolute top-4 right-4 px-4 py-2 rounded bg-gray-200 text-black hover:bg-gray-300" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1 className="text-4xl pt-3 ml-6 font-bold mb-4">Movie Library</h1>
      <div className="filters">
        <FilterOptions
          options={['English', 'Tamil', 'Telugu', 'Malayalam', 'Hindi', 'Panjabi', 'Gujrati']}
          selectedOption={languageFilter}
          onChange={handleLanguageChange}
          darkMode={darkMode} // Pass darkMode state to FilterOptions
        />
        <FilterOptions
          options={['Australia', 'Canada', 'Germany', 'France', 'United Kingdom', 'Ireland', 'India', 'Norway', 'United States']}
          selectedOption={countryFilter}
          onChange={handleCountryChange}
          darkMode={darkMode} // Pass darkMode state to FilterOptions
        />
        <FilterOptions
          options={['Action', 'Adventure', 'Fantasy', 'Documentary', 'Crime', 'Romance', 'Thriller', 'Biography', 'Sport', 'Drama']}
          selectedOption={genreFilter}
          onChange={handleGenreChange}
          darkMode={darkMode} // Pass darkMode state to FilterOptions
        />
      </div>
      <MovieList movies={filteredMovies} darkMode={darkMode}/>
    </div>
  );
};

export default IndexPage;
