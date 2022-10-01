import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealCountCard from './MealCountCard';

const MealCountDetails = () => {
    const { person } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://bachelor-backend.onrender.com/get-person-data/${person}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1 className='font-bold text-center text-2xl my-6'>Meal Count of <span className='text-green-500'>{person}</span></h1>
            <div className='grid grid-cols-3 font-bold text-xl px-12 py-2 mx-12 my-2 bg-[whitesmoke] rounded'>
                <div className='flex items-center'>
                    <p>Date</p>
                </div>
                <div className='flex items-center'>
                    <p>Meal Count</p>
                </div>
            </div>
            {
                data?.mealCount?.map(singleData => <MealCountCard name={data.name} date={singleData[0]} mealCount={singleData[1]} index={singleData[0] - 1} key={singleData._id} />)
            }
        </div>
    );
};

export default MealCountDetails;