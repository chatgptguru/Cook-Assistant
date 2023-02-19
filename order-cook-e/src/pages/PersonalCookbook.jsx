import React from 'react'
import CookBook from '../components/CookBook'
import Header from '../components/Header'



export default function PersonalCookbook() {
    return (
        <div className="flex flex-col overflow-hidden bg-hero-pattern">


            <Header />
            <CookBook />

        </div>
    )
}
