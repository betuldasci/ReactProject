import React, { Component } from 'react';

class Popular extends Component {


    state = {
        popularProducts: [],
        error: null,
    };



    componentDidMount() {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                console.log('Gelen veri:', data);
                if (data) {
                    const sortedProducts = data.sort((a, b) => b.soldCount - a.soldCount);
                    const popularProducts = sortedProducts.slice(0, 6);
                    this.setState({ popularProducts: popularProducts });
                } else {
                    this.setState({ error: 'API verisi beklenen formatta değil' });
                }
            })
            .catch(error => {
                console.error('Veri çekme hatası:', error);
                this.setState({ error: 'Veri çekme hatası' });
            });
    }

    render() {
        const { popularProducts, error } = this.state;


        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div>
                {popularProducts.map((product, index) => (
                    <div key={index} className="card mb-3 float-end" onClick={() => this.props.onBlogClick(product)}>
                        <div className="row g-0">
                            <div className="col-md-5 col-12 align-self-center">
                                <img src={product.image[0]} alt="img" className="img-fluid card-img-top" />
                            </div>
                            <div className="col-md-7 col-12">
                                <div className="card-body">
                                    <h5 className="card-title most_fh5co_treding_font"><p>Popüler Ürün </p>{product.title}</h5>
                                    <p className="card-text fh5co_consectetur">
                                        <i className="fa fa-heart-o"></i>Satış Sayısı {product.soldCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




        );
    }
}

export default Popular;
