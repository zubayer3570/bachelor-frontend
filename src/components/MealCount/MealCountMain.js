import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddPerson from './AddPerson';
import PersonCard from './PersonCard';

const MealCountMain = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/get-person")
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    return (
        <>
            {
                persons.map(singlePerson => <Link to={`/meal-count-details/${singlePerson.name}`} className='btn'>{singlePerson.name}</Link>)
            }

            <Link to='/add-person' className='btn' >Add Person</Link>
        </>
    );
};

export default MealCountMain;