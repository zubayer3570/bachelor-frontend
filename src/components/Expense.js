import React from 'react';
import { Link } from 'react-router-dom';

const Expense = (props) => {
    const date = props.date
    const total = props.total
    return (
        <Link to={`/expenses-deatils/${date}`}>
            <div className='flex justify-around bg-orange-300 rounded mx-4 my-2 py-4'>
                <div className='font-bold text-xl'>{date}</div>
                <div className='font-bold text-xl'>Total {total}</div>
            </div>
        </Link>
    );
};

export default Expense;