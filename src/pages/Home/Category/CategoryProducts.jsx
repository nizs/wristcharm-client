import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';

const CategoryProducts = () => {
    const categoryproducts = useLoaderData();
    const pathname = window.location.pathname.split("/").pop();
    return (
        <div className='py-8 mx-auto'>
            {/* Blog header */}
            <div className='flex flex-col items-center md:p-8 bg-[#F3F8F6] backimg'>
                <h1 className='text-[22px] md:text-[28px] font-bold text-white text-center'></h1>
                <p className='text-white text-4xl font-bold mt-4'>{pathname}</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-16 py-8'>
                {
                    categoryproducts.map(cproduct => <CategoryProduct
                        key={cproduct._id}
                        cproduct={cproduct}
                    ></CategoryProduct>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;