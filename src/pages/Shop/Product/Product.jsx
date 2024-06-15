import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';

const Product = ({ product }) => {
    const { _id, title, price, category, product_showcase_img1 } = product;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = product => {
        if (user && user.email) {
            // sending cart item to DB
            const cartItem = {
                productId: _id,
                email: user.email,
                customerName: user.displayName,
                productTitle: title,
                image: product_showcase_img1,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${title} has been added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetching cart data for instant loading 
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Your are not logged in !!",
                text: "Please login to Add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }



    return (
        <div className="card bg-base-100 shadow-xl border rounded-sm">
            <figure className='p-4'><img className='rounded-sm' src={product_showcase_img1} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='text-primary text-sm font-semibold'>{category}</p>
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-secondary font-semibold'>{price}</p>
                <div className="card-actions  justify-end mt-4">
                    <button onClick={() => handleAddToCart(product)} className="btn md:btn-sm text-white bg-primary border-0 rounded-sm hover:bg-primary-light">ADD TO CART</button>
                    <button className="btn bg-secondary rounded-sm hover:bg-secondary-light text-white border-0 md:btn-sm">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;