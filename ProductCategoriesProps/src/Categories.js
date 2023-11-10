// Categories.js
import React from 'react';

function Categories({ categories, filterCat }) {
    return (
        <div className="mb-4">
            <label htmlFor="cat">Categories</label>
            <select className="form-control" onChange={(e) => filterCat(e.target.value)} id="cat">
                <option value="" hidden>
                    Choose
                </option>
                {categories.map((c, a) => (
                    <option key={a} value={c}>
                        {c}
                    </option>
                ))}
            </select>
            {categories.map((c, a) => (
                <div key={a} className="mt-2">
                    <span>{c}</span>
                </div>
            ))}
        </div>
    );
}

export default Categories;
