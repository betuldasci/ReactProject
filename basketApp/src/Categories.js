import React from 'react'

function Categories({ categories, filterCategories, allProducts }) {


    return (
        <div className='mb-4'>
            <h5>Categories</h5>
            <ul className='list-group'>
                {categories.map((cat, index) => (
                    <li key={index} onClick={() => filterCategories(cat)} style={{ cursor: 'pointer' }} className='list-group-item'>
                        {cat}
                    </li>
                ))}
                <li style={{ cursor: 'pointer' }} onClick={() => allProducts()} className='list-group-item'>
                    All Products
                </li>
            </ul>
        </div>
    );
}
export default Categories