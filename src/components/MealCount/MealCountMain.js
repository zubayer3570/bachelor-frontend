import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PersonCard from './PersonCard'


const MealCountMain = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch("https://bachelor-backend.onrender.com/get-person")
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    return (
        <>
        <div className='flex justify-center mt-8 mb-[-0.5rem] text-3xl font-bold'>Meal Count</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-8'>
                {
                    persons.map(singlePerson => <Link to={`/meal-count-details/${singlePerson.name}`}> <PersonCard data={singlePerson} /> </Link>)
                }
            </div>

            <div className='flex justify-center'>
                <Link to='/add-person'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add Person +
                    </button>
                </Link>
                <Link to='/'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Go Back To Home
                    </button>
                </Link>
            </div>
        </>
    );
};

export default MealCountMain;