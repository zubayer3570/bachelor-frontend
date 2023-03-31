import React from 'react';
import Loading from '../Loading';

const MealRate = (props) => {
    return (
        <div>
            <h1 className='text-4xl font-bold mb-4' >Average Meal Rate</h1>
            {
                props.ave ?
                    <h1 className='flex justify-center text-5xl font-bold text-red-700'>{props.ave} Tk</h1>
                    :
                    <Loading />
            }
        </div>
    );
};

export default MealRate;