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
        fetch("https://bachelor-backend.onrender.com/update-meal-count", {
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
            <div className='flex flex-col justify-center items-center h-[70vh]'>
                <h1 className='font-bold text-center text-xl mb-4'>Update meal</h1>
                <form onSubmit={updateMealCount}>
                    <input type="text" name='mealCount' className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3 bg-[whitesmoke]" />
                    <input type="submit" value="update" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' />
                </form>
            </div>
        </>
    );
};

export default MealCountCardUpdate;