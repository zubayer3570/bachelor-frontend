import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const submit = async (e) => {
        e.preventDefault()
        const password = e.target.password.value
        localStorage.setItem("bachelor-password", password)
        navigate(`${location.state.from}`, {replace: true})
    }
    return (
        <form onSubmit={submit} className='flex flex-col items-center mx-4 mt-8 lg:mx-12 px-12 py-8 rounded-md bg-gray-50'>
            <p className='text-3xl font-bold text-center mb-8'>Authenticate</p>
            <div>
                <input name='password' type="text" className="mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />
                <input type="submit" value="Submit" className='cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' />
            </div>
        </form>
    );
};

export default Login;