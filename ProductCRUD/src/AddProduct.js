import React, { useState } from 'react'
// urun adi, urun aciklamasi, urun fiyatı, urun idsi
export default function AddProduct() {
    const [productName, setName] = useState('');
    const [productDesc, setDesc] = useState('');
    const [productPrice, setPrice] = useState('');
    const [id, setId] = useState(0);
    const [products, setProduct] = useState([
        { productName: 'Telefon', productDesc: 'aaa', productPrice: '10', id:0 },
        { productName: 'Telefon', productDesc: 'aaa', productPrice: '10' , id:1},
        { productName: 'Telefon', productDesc: 'aaa', productPrice: '10', id:2 }

    ])

    const [editProductId, setEditProduct] = useState();
    const [mode, setMode] = useState(false);

    const AddProduct = () => {
        if (productPrice && productName) {
            setId(id + 1);
            setProduct([...products, { id, productName, productDesc, productPrice }]);
            setName('');
            setDesc('');
            setPrice('');
        }
    }

    const DeleteProduct = (d) => {
        setProduct(products.filter((i) => i.id !== d.id))
    }

    const editProduct = (e) => {
        setName(e.productName);
        setDesc(e.productDesc);
        setPrice(e.productPrice);
        setEditProduct(e.editProductId);
        setMode(true)
    }
    const updateProduct = () => {
        const newProducts = products.map((p) => {
            return p.id === editProductId ?
                { productName, productPrice, productDesc } : p;
        });
        setProduct(newProducts);
        setName('');
        setDesc('');
        setPrice('');
        setMode(false);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h2>Add Product</h2>
                    <div className="col-4">
                        <label>Product Name</label>
                        <input value={productName} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="col-4">
                        <h2>Product Description</h2>
                        <textarea name="" id="" cols="30" rows="10" value={productDesc} onChange={(e) => setDesc(e.target.value)}></textarea>
                    </div>
                    <div className="col-4">
                        <h2>Product Price</h2>
                        <input type='number' value={productPrice} onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                </div>
            </div>





            {mode === true ? (
                <button className='btn btn-dark' onClick={updateProduct}>Update Product</button>

            ) :
                (<button className='btn btn-dark' onClick={AddProduct}>Add Product</button>)
            };
            <h2>Products</h2>
            {products.map((p) => {
                return (
                    <div className='container'>
                        <div className="row">
                            <div className="col-12">
                                <div className="col-4">
                                    <h3>{p.productName}</h3>
                                </div>
                                <div className="col-4">
                                    <p>{p.productDesc}</p>

                                </div>
                                <div className='col-4'>
                                    <p>{p.productPrice}</p>

                                </div>


                            </div>
                            <button className='btn btn-primary' onClick={() => DeleteProduct(p.id)}>DELETE</button>
                            <button className='btn btn-dark' onClick={() => editProduct(p)}>GUNCELLE</button>
                        </div>
                    </div>

                )
            })}
        </div >
    )
}


