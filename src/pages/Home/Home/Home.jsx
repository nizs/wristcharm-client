import React from 'react';
import Products from '../../Shop/Products/Products';
import Carousel from '../Carousel/Carousel';
import Categories from '../Category/Categories';


const Home = () => {
    return (
        <div>
            <Carousel />
            <Categories />
            <Products />
        </div>
    );
};

export default Home;