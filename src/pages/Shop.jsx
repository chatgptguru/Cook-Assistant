import React from 'react'
import Header from '../components/Header'
import PricingTables from '../components/PricingTables'
import homeImageBackground from "../images/homeBackground.png"

export default function Shop() {
    return (
        <div className="flex flex-col relative min-h-screen  overflow-hidden">

            {/* Background image */}


            <Header />
            <PricingTables />


        </div>
    )
}
