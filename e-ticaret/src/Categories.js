
import React, { Component } from 'react';

class Categories extends Component {
    handleCategoryClick = (kategoriId) => {
        console.log('Seçilen kategori:', kategoriId);
        this.setState({ selectedCategoryId: kategoriId });
        this.props.onCategorySelect(kategoriId);
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {this.props.Categories.map((category, index) => (
                                    <li className="nav-item" key={index} style={{ marginRight: '10px' }}>
                                        <button className="nav-link btn btn-dark" onClick={() => this.handleCategoryClick(category.id)}>
                                            {category.name}
                                        </button>

                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>


        );
    }
}

export default Categories;
