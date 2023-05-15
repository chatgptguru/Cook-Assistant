import React from 'react'
import DishesPage from '../components/DishesPage'
import Header from '../components/Header'
import homeImageBackground from "../images/homeBackground.png"

export default function GetDishesPage() {
    return (
        <div className="flex flex-col overflow-hidden bg-hero-pattern">

            <Header />
            <DishesPage />
        </div>
    )
}
