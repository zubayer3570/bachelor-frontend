import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import ExpenseCard from './ExpenseCard';

const ExpensesMain = () => {
    const { isLoading, data } = useQuery('get-meal-expense', async () => {
        const data = await axios.get('http://localhost:5000/get-expenses-details')
        return data?.data
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <p className='font-bold text-2xl text-center pt-8 pb-4'>Expense List</p>
            <p className='font-bold text-xl text-center p-8'>Remaining In Meal: <span className={data?.mealBalance < 0 ? `text-[red]` : `text-[green]`} >{data?.mealBalance} Tk</span></p>
            {console.log(data?.mealBalance)}
            {
                data?.expenseDetails.map(expense => <ExpenseCard expense={expense} key={expense._id} />)
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

export default ExpensesMain;