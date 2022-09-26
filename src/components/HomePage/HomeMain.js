import React from 'react';
import { Link } from 'react-router-dom';
import MealRate from './MealRate';

const HomeMain = () => {
    return (
        <>
            <MealRate />
            <Link to='/expenses'><button className='btn'>Expenses</button></Link>
            <Link to='/meal-count'><button className='btn'>Meal Count</button></Link>
        </>
    );
};

export default HomeMain;