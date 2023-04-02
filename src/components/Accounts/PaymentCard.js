import React from 'react';

const PaymentCard = ({ date, amount }) => {
    return (
        <div className='flex bg-[whitesmoke] justify-between px-44 py-2 mx-8 my-2 rounded-md font-bold'>
            <p>{date}</p>
            <p>{amount}tk</p>
        </div>
    );
};

export default PaymentCard;