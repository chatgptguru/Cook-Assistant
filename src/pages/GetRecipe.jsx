import React from 'react'
import CBkDisheDetails from '../components/CBkDisheDetails'
import Header from '../components/Header'

export default function GetRecipe() {
    return (
        <div className="flex flex-col     overflow-hidden bg-hero-pattern">

            <Header />
            <CBkDisheDetails />
        </div>
    )
}
