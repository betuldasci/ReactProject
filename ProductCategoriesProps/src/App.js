// App.js
import React, { useState } from 'react';
import './App.css';
import Navi from './Navi';
import Products from './Products';
import Categories from './Categories';

function App() {
  const cardItems = [
    { name: 'Phone 1', price: '10TL', cat: 'Phone' },
    { name: 'Computer 1', price: '10TL', cat: 'Computer' },
    { name: 'Phone 2', price: '10TL', cat: 'Phone' },
    { name: 'Charger 3', price: '10TL', cat: 'Accessory' },
    { name: 'Phone 4', price: '10TL', cat: 'Phone' },
    { name: 'Phone 5', price: '10TL', cat: 'Phone' },
    { name: 'Charger 3', price: '10TL', cat: 'Accessory' },
    { name: 'Charger 3', price: '10TL', cat: 'Accessory' },
  ];

  const [filteredItems, setFilteredItems] = useState(cardItems);
  const categories = ['Phone', 'Computer', 'Accessory'];
  const [basket, setBasket] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
    setDropdownVisible(true);
  };

  const toggleDropDown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const filterCat = (selectedCategory) => {
    const items = cardItems;
    setFilteredItems(
      selectedCategory
        ? items.filter((item) => item.cat === selectedCategory)
        : items
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Categories filterCat={filterCat} categories={categories} />
          </div>
          <div className="col-md-8">
            <Products cards={filteredItems} addToBasket={addToBasket} />
          </div>
          <div className="col-md-12 mt-3">
            <Navi basket={basket} toggleDropDown={toggleDropDown} dropdownVisible={dropdownVisible} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
