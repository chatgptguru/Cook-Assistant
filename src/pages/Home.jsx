import React from 'react'
import Header from '../components/Header'
import HeroHome from '../components/HeroHome'


export default function Home() {
    return (
        <div className="flex flex-col  overflow-hidden bg-hero-pattern">



            <Header />
            <HeroHome />
        </div>
    )
}
