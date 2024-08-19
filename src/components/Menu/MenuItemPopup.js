import React from 'react';
import './MenuItemPopup.css';

const MenuItemPopup = ({ item, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <div className="popup-header">
          <h3>{item.name}</h3>
          <span className="popup-price">Price : {item.price}</span>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          <img src={item.image} alt={item.name} />
          <div className="popup-details">
            <h4>Ingredients</h4>
            <p>{item.ingredients}</p>
            <h4>Description</h4>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemPopup;
