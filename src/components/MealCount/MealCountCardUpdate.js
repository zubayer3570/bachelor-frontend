import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MealCountCardUpdate = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const name = searchParams.get('name')
    const index = searchParams.get('index')
    const updateMealCount = (e) => {
        e.preventDefault()
        const mealCountUpdate = e.target.mealCount.value
        fetch("http://localhost:5000/update-meal-count", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, index, mealCountUpdate: parseInt(mealCountUpdate) })
        })
            .then(data => data.json())
            .then(res => navigate(`/meal-count-details/${name}`))
    }
    return (
        <>
            <form onSubmit={updateMealCount}>
                <input name='mealCount' type="text" className='input input-bordered' />
                <input value='Update' type="submit" className='btn' />
            </form>
        </>
    );
};

export default MealCountCardUpdate;