import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        await axios.post('http://localhost:5000/login', {
            email, password
        })
            .then(res => {
                if (res.data) {
                    localStorage.setItem("user", JSON.stringify({
                        _id: res.data._id,
                        email: res.data.email,
                        role: res.data.role,
                    }));
                    navigate('/')
                }
            })
            .catch(err => {
                if (err) {
                    toast.error(err?.response?.data?.error)
                }
            })
    };
    return (
        <div className='flex items-center justify-center'>
            <form
                onSubmit={handleLogin}
                className='sm:w-[500px] w-full mt-10 shadow-lg p-10 rounded-md'
            >
                <h1 className='text-4xl font-medium text-indigo-600 mb-10'>
                    Login
                </h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        required type="email"
                        name="email" id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" "
                    />
                    <label
                        for="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        required type="password"
                        name="password" id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                        placeholder=" "
                    />
                    <label
                        for="password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                    Login
                </button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;