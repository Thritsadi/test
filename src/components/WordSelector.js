import React from 'react';

const WordSelector = ({ onCategorySelect }) => {
  const categories = [
    'animals', 'fruits', 'countries', 'sports', 'colors', 
    'vehicles', 'jobs', 'music', 'plants', 'food'
  ];

  return (
    <div className="word-selector">
      <h2>Select a Category</h2>
      <select onChange={(e) => onCategorySelect(e.target.value)} defaultValue="">
        <option value="" disabled>Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default WordSelector;
