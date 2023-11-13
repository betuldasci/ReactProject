import React from 'react'
import { Row } from "reactstrap";

function Products({ products, addToBasket }) {
    return (
        <Row>

            {products.map((product, index) => {
                return (
                    <div key={index} className="col-4 card mb-3">
                        <div className="card-body">
                            <h5 className='card-title'>{product.name}</h5>
                            <p className='card-text'> Price: {product.price}</p>
                            <button className='btn btn-primary' onClick={() => addToBasket(product)}>Add To Basket</button>
                        </div>
                    </div>
                )
            })}

        </Row>


    )
}

export default Products