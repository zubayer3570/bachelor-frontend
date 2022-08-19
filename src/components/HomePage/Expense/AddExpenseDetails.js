import React from 'react';
import { Link } from 'react-router-dom';

const AddExpenseDetails = () => {
    return (
        <div className='flex justify-center'>
            <Link to='/add-date'>
                <button className='btn btn-dark'>Add a Date</button>
            </Link>
        </div>
    );
};

export default AddExpenseDetails;