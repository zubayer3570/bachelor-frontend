import React from 'react';
import { Link } from 'react-router-dom';
import Expense from './Expense';

const Expenses = () => {
    return (
        <div>
            <Expense date='august-9' total='295' />
            <div className='flex justify-center'>
                <Link to='/add-expense'>
                    <button class="btn">Add Expense+</button>
                </Link>
            </div>
        </div>
    );
};

export default Expenses;