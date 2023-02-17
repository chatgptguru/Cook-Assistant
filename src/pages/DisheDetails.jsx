import React from 'react'
import DisheSingle from '../components/DisheSingle.jsx'
import Header from '../components/Header'


export default function DisheDetails() {
    return (

        <div className="flex flex-col     overflow-hidden bg-hero-pattern">

            <Header />
            <DisheSingle />
        </div>
    )
}
