import React from 'react';

const AddExpense = () => {
    const takeExpenseDetails = (e) => {
        e.preventDefault()
        const details = e.target.expensDetails.value;
        fetch('http://localhost:5000/add-details', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ details })
        })
    }
    return (
        <>
            <form onSubmit={takeExpenseDetails}>
                <div className='px-4 my-4'>
                    <textarea name='expensDetails' class="textarea textarea-bordered w-full h-[50vh]" placeholder="Add detailed Expense of today"></textarea>
                </div>
                <div className='flex justify-center'>
                    <input type="submit" value="Add details" className='btn btn-dark' />
                </div>
            </form>
        </>
    );
};

export default AddExpense;