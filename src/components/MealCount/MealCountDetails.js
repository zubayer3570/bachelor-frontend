import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealCountCard from './MealCountCard';

const MealCountDetails = () => {
    const { person } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/get-person-data/${person}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1>{person}</h1>
            {
                data?.mealCount?.map(singleData => <MealCountCard name={data.name} date={singleData[0]} mealCount={singleData[1]} index={singleData[0] - 1} key={singleData._id} />)
            }
        </div>
    );
};

export default MealCountDetails;