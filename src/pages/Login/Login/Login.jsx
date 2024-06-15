import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import ProviderLogin from '../../../components/ProviderLogin/ProviderLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const capchaRef = useRef(null);
    const [disabled, setDesabled] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: "User LoogedIn Successfully",
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
                navigate(from, { replace: true });
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
                <title>WristCharm | Login</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold text-primary">Login now!</h1>
                        <p className="py-6">Login and keep continoue to Explore of our endless watch collection and have a great journey with us and be charmed with gifted collection of WristCharm</p>
                        <img src="https://i.ibb.co/vkn4Vjw/Wrist-Charm-5529-CH-Sliver-Gold-Black-product-img-01.png" alt="" />
                    </div>
                    <div className="card shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                        required: true
                                    }
                                )}
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
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
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="login" />
                            </div>
                            <p>Don't Have an account ? <Link to='/register' >Register</Link></p>
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

export default Login;