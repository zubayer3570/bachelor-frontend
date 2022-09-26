import React from 'react';
import { Link } from 'react-router-dom';

const MealCountCard = (props) => {
    return (
        <div className='grid grid-cols-3'>
            <div>{props.date}</div>
            <div>{props.mealCount}</div>
            <Link to={`/meal-count-card-update?name=${props.name}&index=${props.index}`}><button className='btn'>Update</button></Link>
        </div>
    );
};

export default MealCountCard;