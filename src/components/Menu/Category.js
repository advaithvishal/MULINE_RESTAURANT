import React from 'react';
import './Category.css';

function Category({ name, isSelected, onClick }) {
  return (
    <button
      className={`category ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Category;
