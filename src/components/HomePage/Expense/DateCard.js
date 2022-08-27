import React from 'react';

const DateCard = (props) => {
    return (
        <div className='flex justify-around p-4 h-[150px] bg-orange-300'>
            <div>
                {props.date}
            </div>
            <div>
                {props.total}
            </div>
        </div>
    );
};

export default DateCard;