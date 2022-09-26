import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExpenseCard from './ExpenseCard';

const ExpensesMain = () => {
    const [expenses, setExpenses] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/get-expenses")
            .then(res => res.json())
            .then(data => setExpenses(data))
    }, [])
    return (
        <div>
            <p>this is a the expense</p>
            {
                expenses?.map(expense => <ExpenseCard expense={expense} />)
            }
            <Link to='/add-expense'><button className='btn'>Add Expense</button></Link>
        </div>
    );
};

export default ExpensesMain; <p>this is a the expense</p>