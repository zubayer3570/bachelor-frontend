import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='sticky top-0 z-[2]'>
            <div className='flex justify-between h-[60px] bg-[#1F2937] font-bold rounded-md m-4'>
                <div className='hidden lg:flex items-center pl-8 text-[white] text-[18px]'>
                    <Link to='/' >Bachelor's Website</Link>
                </div>
                <div className='flex'>
                    <div className='hidden lg:flex items-center pr-8 text-[white]'>
                        <Link to='/meal-count' >Meal count</Link>
                    </div>
                    <div className='hidden lg:flex items-center pr-8 text-[white]'>
                        <Link to='/expenses' >Expenses</Link>
                    </div>
                    <div className='hidden lg:flex items-center pr-8 text-[white]'>
                        <Link to='/other-expenses' >Other expenses</Link>
                    </div>
                    <div className='hidden lg:flex items-center pr-8 text-[white]'>
                        <Link to='/accounts' >Accounts</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;