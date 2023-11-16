import React, { Component } from 'react';

class Headline extends Component {

    state = {
        bannerProducts: [],
        error: null,
    };

    componentDidMount() {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                console.log('Gelen veri:', data);
                if (data) {
                    const bannerProducts = data.filter(product => product.banner === 1);
                    this.setState({ bannerProducts: bannerProducts });
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
        const { bannerProducts, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        return (
            <div className="container-fluid padding mb-5">
                <div className="row mx-0">
                    <div className="col-md-6 col-lg-5 pe-0"> {/* Sağa doğru iç içe geçen kartlar için "pe-0" sınıfı eklendi */}
                        <div className="row">
                            {bannerProducts.slice(1, 7).map((product, index) => (
                                <div key={index} className="col-md-6 col-6 animate-box mb-0" data-animate-effect="fadeIn"
                                    onClick={() => this.props.onBlogClick(product)}>
                                    <div className="card">
                                        <img src={product.image[0]} alt="img" className="card-img-top" />
                                        <div className="card-img-overlay fh5co_suceefh5co_height_position_absolute">
                                            <div className="card-text">
                                                <a href="test" className="color_fff">
                                                    <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{product.price}
                                                </a>
                                            </div>
                                            <div className="card-text">
                                                <a href="single.html" className="color_fff fh5co_good_font_2">
                                                    {product.title}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 col-12 padding animate-box mb-0" data-animate-effect="fadeIn"
                        onClick={() => this.props.onBlogClick(bannerProducts[0])}>
                        {bannerProducts.length > 0 && (
                            <div className="card">
                                <img src={bannerProducts[0].image[0]} alt="img" className="card-img-top" />
                                <div className="card-img-overlay fh5co_suceefh5co_height_position_absolute">
                                    <div className="card-text">
                                        <a href="test" className="color_fff">
                                            <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{bannerProducts[0].price}
                                        </a>
                                    </div>
                                    <div className="card-text">
                                        <a href="single.html" className="color_fff fh5co_good_font">
                                            {bannerProducts[0].title}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


        );
    }
}

export default Headline;
