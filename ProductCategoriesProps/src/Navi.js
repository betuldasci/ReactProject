// Navi.js
import React from 'react';

function Navi({ basket, toggleDropDown, dropdownVisible }) {
    return (
        <nav className="navbar navbar-dark bg-dark mb-3">
            {basket.length > 0 && (
                <div className="btn-group">
                    <button
                        onClick={toggleDropDown}
                        type="button"
                        className="btn btn-danger dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={dropdownVisible}
                    >
                        Basket
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu show">
                            {basket.length > 0 ? (
                                basket.map((item, index) => (
                                    <div key={index}>
                                        <a className="dropdown-item">
                                            {item.name} - {item.price}
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div className="dropdown-item">Basket is empty</div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navi;
