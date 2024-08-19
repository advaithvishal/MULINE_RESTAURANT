// src/components/Menu/MenuItem.js
import React, { useState } from 'react';
import './MenuItem.css';
import MenuItemPopup from './MenuItemPopup';

function MenuItem({ item }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="menu-item" onClick={handlePopupOpen}>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
      </div>
      {isPopupOpen && (
        <MenuItemPopup item={item} onClose={handlePopupClose} />
      )}
    </>
  );
}

export default MenuItem;