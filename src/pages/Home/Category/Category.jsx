import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ ctg }) => {
    const { category, category_img } = ctg;
    return (
        <div>
            <Link to={`/categories/${category}`} className='card  before:bg-gradient-to-t from-[#000000] to-[black, 0.5] bg-base-100 shadow-xl image-full'>
                <figure className='rounded-sm'><img src={category_img} alt="card_img" /></figure>
                <div className="card-body justify-end">
                    <p className='text-[20px] text-primary grow-0'>8 Items</p>
                    <h2 className="card-title text-bold text-3xl text-white">{category}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Category;