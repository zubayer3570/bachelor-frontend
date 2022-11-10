import React from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AccountCard = (props) => {
    return (
        <Link to={`/account-details/${props.name}`}>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{props.name}</h5>
            </div>
        </Link>
    );
};

export default AccountCard;