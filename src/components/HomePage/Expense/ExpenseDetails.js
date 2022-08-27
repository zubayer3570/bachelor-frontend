import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseDetails = () => {
    return (
        <div>
            <Link to='/add-expense-details'>
                <button className='btn btn-dark font-bold'>Add another expense+</button>
            </Link>
        </div>
    );
};

export default ExpenseDetails;