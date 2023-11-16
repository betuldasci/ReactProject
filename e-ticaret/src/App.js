import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { React, Component } from 'react';
import Header from './Header';
import Headline from './Headline';

class App extends Component {
  state = {
    selectedCategoryId: null,
    selectedProduct: null,
    showModal: false
  };

  handleCategorySelect = (selectedCategoryId) => {
    this.setState({ selectedCategoryId });
  };
  openModal = (product) => {
    this.setState({ selectedProduct: product, showModal: true });
  }

  closeModal = () => {
    this.setState({ selectedProduct: null, showModal: false });
  }


  render() {
    return (
      <div className="App">

        <Header onCategorySelect={this.handleCategorySelect}></Header>
        <Headline onBlogClick={this.openModal} />

        <Products selectedCategory={this.state.selectedCategoryId} onBlogClick={this.openModal} showModal={this.state.showModal} selectedProduct={this.state.selectedProduct}
          onClose={this.closeModal}></Products>


        <footer class="bg-dark text-light text-center py-3">
          <p>&copy; 2023. Tüm hakları saklıdır.</p>
        </footer>

      </div>
    );
  }

}

export default App;
