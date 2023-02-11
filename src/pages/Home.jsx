import React from 'react'
import Header from '../components/Header'
import HeroHome from '../components/HeroHome'
import homeImageBackground from "../images/homeBackground.png"

export default function Home() {
    return (
        <div className="flex flex-col md:h-screen  overflow-hidden bg-hero-pattern">

            {/* Background image */}
            <div className="absolute h-screen inset-0  pt-16 box-content -z-1">
                <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div>
            </div>

            <Header />
            <HeroHome />
        </div>
    )
}
