import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpenseCard from './ExpenseCard';

const ExpensesMain = () => {
    const [expenses, setExpenses] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/get-expenses-details")
            .then(res => res.json())
            .then(data => setExpenses(data))
    }, [])
    return (
        <div>
            <p className='font-bold text-2xl text-center pt-8 pb-4'>Expense List</p>
            {
                expenses?.map(expense => <ExpenseCard expense={expense} key={expense._id} />)
            }
            <div className='flex justify-center mt-8'>
                <Link to='/add-expense'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add Expense +
                    </button>
                </Link>
                <Link to='/'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Go Back To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ExpensesMain; <p>this is a the expense</p>