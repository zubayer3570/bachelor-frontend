import React from 'react';

const ExpenseCard = (props) => {
    return (
        <div>
            {props.expense.date}
            {props.expense.description}
            {props.expense.amount}
        </div>
    );
};

export default ExpenseCard;