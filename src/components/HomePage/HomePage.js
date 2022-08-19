import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to='/expense'>
                <div className='m-4'>
                    <p className='font-bold text-xl text-center'>Expense</p>
                </div>
            </Link>
        </div>
    );
};

export default HomePage;