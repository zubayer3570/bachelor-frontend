import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddPerson = () => {
    const navigate = useNavigate()
    const addPerson = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const days = [
            ["1", 0],
            ["2", 0],
            ["3", 0],
            ["4", 0],
            ["5", 0],
            ["6", 0],
            ["7", 0],
            ["8", 0],
            ["9", 0],
            ["10", 0],
            ["11", 0],
            ["12", 0],
            ["13", 0],
            ["14", 0],
            ["15", 0],
            ["16", 0],
            ["17", 0],
            ["18", 0],
            ["19", 0],
            ["20", 0],
            ["21", 0],
            ["22", 0],
            ["23", 0],
            ["24", 0],
            ["25", 0],
            ["26", 0],
            ["27", 0],
            ["28", 0],
            ["29", 0],
            ["30", 0],
            ["31", 0]
        ]
        fetch("http://localhost:5000/add-person", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name: name, mealCount: days })
        })
        .then(data=> navigate('/meal-count'))
    }
    return (
        <form onSubmit={addPerson}>
            <input name='name' className='input input-bordered' type="text" />
            <input type="submit" value="Add" className='btn' />
        </form>
    );
};

export default AddPerson;