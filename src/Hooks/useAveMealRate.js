import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'

const useAveMealRate = () => {
    // const [ave, setAve] = useState(0)
    // const { isLoading, data } = useQuery('fetch-data', async () => {
    //     const totalExpenseAmount = axios.get("https://bachelor-backend.onrender.com/get-total-expense-amount")
    //     const totalMeal = axios.get("https://bachelor-backend.onrender.com/get-total-meal")
    //     const ave = totalExpenseAmount / totalMeal

    // })
    // useEffect(() => {
    //     fetch("https://bachelor-backend.onrender.com/get-total-expense-amount")
    //         .then(res => res.json())
    //         .then(amountData => {
    //             fetch("https://bachelor-backend.onrender.com/get-total-meal")
    //                 .then(res => res.json())
    //                 .then(mealData => {
    //                     const ave = amountData.totalAmount / mealData.totalMeal
    //                     setAve(ave.toFixed(4))
    //                 })
    //         })

    // }, [])
    // return [ave, setAve, isLoading]
};

export default useAveMealRate;