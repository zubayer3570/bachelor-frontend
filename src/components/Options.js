import React from 'react';
import { Link } from 'react-router-dom';

const Options = () => {
    return (
        <>
            <Link to='/expenses'><div className='btn block border-0 bg-orange-300 text-center font-bold rounded mx-4 my-2 p-2 text-xl'>Expenses</div></Link>
            <Link to='/meal-count'><div className='btn block border-0 bg-orange-300 text-center font-bold rounded mx-4 my-2 p-2 text-xl'>Meal Count</div></Link>
            <Link to='/my-account'><div className='btn block border-0 bg-orange-300 text-center font-bold rounded mx-4 my-2 p-2 text-xl'>Your Account</div></Link>
        </>
    );
};

export default Options;