import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import useAveMealRate from '../../Hooks/useAveMealRate';
import MealRate from './MealRate';
import axios from 'axios';

const HomeMain = () => {
    const { isLoading, data } = useQuery('fetch-data', () => {
        return axios.get("https://bachelor-backend.onrender.com/get-ave-meal-rate")
    })
    return (
        <>
            <div className='flex flex-col items-center justify-center h-[100vh] mt-[-7rem]'>
                <MealRate ave={data?.data.ave} />
                <div className='mt-8'>
                    <Link to='/expenses'>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Expenses</button>
                    </Link>
                    <Link to='/meal-count'>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Meal Count</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomeMain;