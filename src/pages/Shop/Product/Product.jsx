import React from 'react';

const Product = ({ product }) => {
    const { title, price, category, product_showcase_img1 } = product;
    return (
        <div className="card bg-base-100 shadow-xl border rounded-sm">
            <figure className='p-4'><img className='rounded-sm' src={product_showcase_img1} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='text-primary text-sm font-semibold'>{category}</p>
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-secondary font-semibold'>{price}</p>
                <div className="card-actions  justify-end mt-4">
                    <button className="btn md:btn-sm text-white bg-primary border-0 rounded-sm hover:bg-primary-light">ADD TO CART</button>
                    <button className="btn bg-secondary rounded-sm hover:bg-secondary-light text-white border-0 md:btn-sm">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;