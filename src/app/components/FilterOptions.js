import React from 'react';

const FilterOptions = ({ options, selectedOption, onChange, darkMode }) => {
  return (
    <select value={selectedOption} onChange={onChange}
    className={`p-3 w-full mt-1 mb-1 rounded cursor-pointer ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <option value="">Select...</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterOptions;
