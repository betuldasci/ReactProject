import React from 'react';

const ProductsModal = ({ product, onClose, showModal }) => {



    return (
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{product.title}</h5>
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row mt-3">
                            {product.image.map((image, imageIndex) => (
                                <div className="col-md-4" key={imageIndex}>
                                    <img src={image} alt={`Product Image ${imageIndex + 1}`} className="img-fluid" />
                                </div>
                            ))}
                        </div>
                        <p>{product.description}</p>
                        <p className="card-text">{product.price}$</p>


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Kapat</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsModal;
