import React from 'react';
import { useParams } from 'react-router-dom';

const ExpenseDetails = () => {
    const params = useParams()
    return (
        <div>
            {
                params.id
            }
        </div>
    );
};

export default ExpenseDetails;