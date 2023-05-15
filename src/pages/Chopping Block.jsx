import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import homeImageBackground from "../images/homeBackground.png"

// import PageIllustration from '../partials/PageIllustration';
// import Footer from '../partials/Footer';

import NotFoundImage from '../images/404.jpg';
import GenerateDishes from '../components/open-ai/GenerateDishes';

function ChoppingBlock() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            {/*  Site header */}
            < Header />

            {/*  Page content */}
            <main className="grow">

                {/*  Page illustration */}
                <div className="absolute h-screen inset-0  pt-16 box-content -z-1">
                    <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                    <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div>
                </div>

                <section className="relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            <div className="max-w-3xl mx-auto flex flex-col justify-center items-center text-center">

                                <h1 className="h1 text-gray-200 mb-4" data-aos="fade-up" data-aos-delay="200">Coming Soon</h1>
                                <p className="text-lg text-gray-400" data-aos="fade-up" data-aos-delay="400">Head to our <Link to="/" className="text-orange-600 hover:text-gray-200 transition duration-150 ease-in-out">homepage</Link> that does exist</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default ChoppingBlock;