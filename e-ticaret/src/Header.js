import React, { Component } from 'react';
import Categories from "./Categories";
import logo from './logo.svg'
import Topbar from "./Topbar";

class Header extends Component {
    state = {
        kategorilerData: [],
        selectedCategoryId: null,
        basket: []
    };

    componentDidMount() {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => {
                this.setState({ kategorilerData: data });
            })
            .catch(error => console.error("Veri çekme hatası:", error));
    }




    render() {
        const { basket } = this.state;

        return (
            <>
                <div style={{ width: '100%', height: '40px' }}>
                    <Topbar />
                </div>
                <div className="container-fluid bg-dark text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                <Categories
                                    Categories={this.state.kategorilerData}
                                    onCategorySelect={this.props.onCategorySelect}

                                />



                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
