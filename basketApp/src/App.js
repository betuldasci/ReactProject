import { useState } from 'react';
import './App.css';
import Products from './Products';
import Categories from './Categories';
import Navi from './Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';

function App() {
  const [products, setProducts] = useState([
    { name: 'Phone 1', price: 10, cat: 'Phone' },
    { name: 'Computer 1', price: 10, cat: 'Computer' },
    { name: 'Phone 2', price: 10, cat: 'Phone' },
    { name: 'Charger 3', price: 10, cat: 'Accessory' },
    { name: 'Phone 4', price: 10, cat: 'Phone' },
    { name: 'Phone 5', price: 10, cat: 'Phone' },
    { name: 'Charger 3', price: 10, cat: 'Accessory' },
    { name: 'Charger 3', price: 10, cat: 'Accessory' },
  ]);
  const [dropdownVisible, setDropdown] = useState(false);
  const [filteredItems, setFilteredItems] = useState(products);
  const [categories, setCategories] = useState(['Phone', 'Computer', 'Accessory']);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const allProducts = () => {

    setFilteredItems([...products]);
  }
  const addToBasket = (product) => {
    setProductCount(productCount + 1);
    setBasket([...basket, product]);
    setTotalPrice((prevTotal) => prevTotal + product.price);
    setDropdown(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const filterCategories = (selectedCat) => {
    const originalProducts = [...products];
    const filteredItems = originalProducts.filter((item) => item.cat === selectedCat);
    setFilteredItems(filteredItems);
  };

  const deleteBasket = () => {
    setBasket([]);
    setProductCount(0);
    setTotalPrice(0);
    setDropdown(false);
  };

  const addProduct = () => {
    const newProduct = {
      name: productName,
      price: productPrice,
      cat: filteredItems.length > 0 ? filteredItems[0].cat : '',
    };
    setProducts([...products, newProduct]);
    setFilteredItems([...filteredItems, newProduct]);
    setProductName('');
    setProductPrice('');
  };

  return (
    <Container>

      <Navi dropdownOpen={dropdownOpen} productCount={productCount} totalPrice={totalPrice} deleteBasket={deleteBasket} basket={basket} toggleDropdown={toggleDropdown} dropdownVisible={dropdownVisible} />
      <Row>
        <Col xs='4'>
          <Categories allProducts={allProducts} categories={categories} filterCategories={filterCategories} />

        </Col>




        <Col xs='8'>
          <Products products={filteredItems} addToBasket={addToBasket} />

        </Col>
      </Row>



      <Routes>



        <Route path='/addProduct' element={<AddProduct productName={productName} productPrice={productPrice} addProduct={addProduct} setProductPrice={setProductPrice} setProductName={setProductName} />}>

        </Route>




      </Routes>
    </Container>
  );
}

export default App;
