import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Category from './Category';

const Categories = () => {
    const axiosPublic = useAxiosPublic();

    const { data: category = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get('/category');
            return res.data;
        }
    })

    return (
        <div className='py-16 container mx-auto section-back'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4'>
                {
                    category.map(ctg => <Category
                        key={ctg._id}
                        ctg={ctg}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;