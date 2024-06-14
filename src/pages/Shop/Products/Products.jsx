import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Product from '../Product/Product';

const Products = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    })

    return (
        <div className='py-16 container mx-auto'>
            <div className='text-center'>
                <h3 className='text-1xl font-bold text-primary bg-[#f5efe1] px-4 py-2 w-2/3 md:w-1/3 mx-auto rounded'>Featured Products</h3>
            </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mt-12'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
        </div>
    );
};

export default Products;