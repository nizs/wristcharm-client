import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
import ProviderLogin from '../../../components/ProviderLogin/ProviderLogin';
import Swal from 'sweetalert2';

const Register = () => {
    const capchaRef = useRef(null);
    const [disabled, setDesabled] = useState(true);
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // creating user entry into the DB
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log(loggedUser);
                                    console.log('user Info added to the DB');
                                    reset();
                                    Swal.fire({
                                        title: "User Signed Up Successfully",
                                        showClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeInUp
                                                animate__faster
                                              `
                                        },
                                        hideClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                              `
                                        }
                                    });
                                }
                            })
                    })
                    .catch(error => console.log(error))
                navigate('/shop');
            })
    }

    const handleValidateCapcha = e => {
        const user_capcha_value = capchaRef.current.value;
        e.preventDefault();
        if (validateCaptcha(user_capcha_value)) {
            setDesabled(false);
        }
        else {
            setDesabled(true);
        }
    }
    return (
        <>
            <Helmet>
                <title>WristCharm | Register</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold text-primary">Register</h1>
                        <p className="py-6">Register and Explore of endless watch collection and have a great journey with us and be charmed with gifted collection of WristCharm</p>
                        <img src="https://i.ibb.co/5GB84rf/Wrist-Charm-9171-CH-Blue-product-img-01.png" alt="" />
                    </div>
                    <div className="card shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>photoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 20,
                                        pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/
                                    }
                                )}
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be within 20 charecters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must be eight characters including one uppercase letter, one lowercase letter, and one number or special character.</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={capchaRef} name='capcha' placeholder="Type capcha" className="input input-bordered" required />
                                <button onClick={handleValidateCapcha} className="mt-2 btn btn-outline btn-success" >Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <p>Have an account ? <Link to='/login'>Login</Link> here</p>
                            <div className="divider mt-8">OR</div>
                            <ProviderLogin />
                            <div className="navbar-end mt-4">
                                <Link to='/home'><a className="btn">Back To Home</a></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;