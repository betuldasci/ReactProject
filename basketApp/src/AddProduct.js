import React from 'react'

function AddProduct({ productName, productPrice, addProduct, setProductPrice, setProductName }) {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-12">
                    <h2>Add Product</h2>
                    <div className="form-group">
                        <label htmlFor="productName">Name: </label>
                        <input className="form-control" type="text" value={productName} id="productName" onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Price:</label>
                        <input type="text" className="form-control" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={addProduct}>
                        Add Product
                    </button>
                </div>
            </div>
        </div>

    )
}

export default AddProduct