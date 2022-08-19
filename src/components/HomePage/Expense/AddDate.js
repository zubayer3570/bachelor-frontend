import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddDate = () => {
    const navigate = useNavigate()
    const addDate = (e) => {
        e.preventDefault()
        const date = `${e.target.day.value}-${e.target.month.value}-${e.target.year.value}`
        fetch('http://localhost:5000/add-date', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ date })
        })
            .then(res => navigate('/expense'))

    }
    return (
        <div>
            <form onSubmit={addDate}>
                <input type="text" name='day' placeholder='Day' className='input input-bordered' />
                <input type="text" name='month' placeholder='Month' className='input input-bordered' />
                <input type="text" name='year' placeholder='Year' className='input input-bordered' />
                <input type="submit" value='Add' className='btn btn-dark' />
            </form>
        </div>
    );
};

export default AddDate;