import React from 'react';
import { Link } from 'react-router-dom';

const AddExpenseDetails = () => {
    const addExpenseDetails = (e) => {
        e.preventDetails()
        const details = e.target.expenseDetails.value;
        const price = e.target.price.value;
        fetch('/add-expense-details', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({details, price})
        })
    }
    return (
        <form onSubmit={addExpenseDetails} className='flex justify-center'>
            <input name='expenseDetails' type="text" />
            <input name='price' type="text" />
            <Link to='/add-expense-details'>
                <button className='btn btn-dark'>Add the Expense+</button>
            </Link>
        </form>
    );
};

export default AddExpenseDetails;