import React, { Component } from 'react';
import logo from './logo.svg';
import ProductsModal from './ProductsModal';
import Popular from "./Popular";

class Products extends Component {
    state = {
        products: [],
        error: null,
        basket: []
    };

    componentDidMount() {
        this.fetchProductsForCategory(this.props.selectedCategory);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategory !== this.props.selectedCategory) {
            this.fetchProductsForCategory(this.props.selectedCategory);
        }
    }


    fetchProductsForCategory = (kategoriId) => {
        const apiUrl = kategoriId
            ? `http://localhost:3000/products?categoryId=${kategoriId}`
            : 'http://localhost:3000/products';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log('Gelen veri:', data);
                if (data) {
                    this.setState({ products: data });
                } else {
                    this.setState({ error: 'API verisi beklenen formatta değil' });
                }
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
                this.setState({ error: 'Veri çekme hatası' });
            });
    };


    render() {
        const { products, error } = this.state;


        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div className="row mx-0">
                <hr />
                <main className="container my-5">
                    <div className="row">
                        <div className="col-md-8">
                            {products.map((product, index) => (
                                <div key={index} className="card mb-3" onClick={() => this.props.onBlogClick(product)}>
                                    <div className="row g-0">

                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="card-title">{product.title}</h4>
                                                <small>Fiyat : {product.price}$</small>

                                                <div className="row mt-3">
                                                    {product.image.map((image, imageIndex) => (
                                                        <div className="col-md-4" key={imageIndex}>
                                                            <img src={image} alt={`Product Image ${imageIndex + 1}`} className="img-fluid" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4">
                            <Popular onBlogClick={this.props.onBlogClick} />
                        </div>
                    </div>
                </main>

                {this.props.selectedProduct && (
                    <ProductsModal
                        product={this.props.selectedProduct}
                        onClose={this.props.onClose}
                        showModal={this.props.showModal}
                    />
                )}
            </div>

        );
    }
}

export default Products;
