import React from 'react'
import RecipeDetails from '../components/RecipeDetails'
import Header from '../components/Header'

export default function GetRecipe() {
    return (
        <div className="flex flex-col     overflow-hidden bg-hero-pattern">

            <Header />
            <RecipeDetails />
        </div>
    )
}
