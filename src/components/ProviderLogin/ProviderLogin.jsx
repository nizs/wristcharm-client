import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from "react-icons/fa";

const ProviderLogin = () => {
    const { providerLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignin = () => {
        const googleProvider = new GoogleAuthProvider();

        providerLogin(googleProvider)
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <div className="mt-6">
                <button onClick={handleGoogleSignin} className="btn bg-primary hover:primary-light text-white w-full">
                    <FaGoogle />
                    Sign in with Google</button>
            </div>
        </div>
    );
};

export default ProviderLogin;