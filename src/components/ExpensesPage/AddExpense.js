import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        const date = e.target.date.value
        const description = e.target.description.value
        const amount = e.target.amount.value
        const expense = { date, description, amount }
        fetch("http://localhost:5000/add-expense", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(expense)
        })
            .then(res => navigate("/expenses"))
    }
    return (
        <form onSubmit={submit}>
            <input name='date' type="text" placeholder='date' className='input input-bordered' />
            <input name='description' className='block h-[100px] w-full input input-bordered' type="text" placeholder='description' />
            <input name='amount' type="text" placeholder='amount' className='input input-bordered' />
            <input type="submit" value="submit" className='btn' />
        </form>
    );
};

export default AddExpense;