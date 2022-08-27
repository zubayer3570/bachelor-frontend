import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DateCard from './DateCard';

const Expense = () => {
    const [expense, setExpense] = useState([])
    fetch('http://localhost:5000/all-date')
        .then(res => res.json())
        .then(data => setExpense(data))
    return (
        <>
            {
                expense.map(singleExpense => <DateCard date={singleExpense.date} total={singleExpense.total} />)
            }
            <div className='flex justify-center'>
                <Link to='/add-date'>
                    <button className='btn btn-dark'>Add a Date</button>
                </Link>
            </div>
        </>
    );
};

export default Expense;