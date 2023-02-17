import React from 'react'
import bigTitle from '../images/bigTitle.png'
import justAsk from '../images/justAsk.png'
import recipe from '../images/recipe.png'
import appStore from '../images/appStore.png'
import playStore from '../images/playStore.png'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import CookBookk from "../images/PersonalCookbook.png"
import RecipeCard from './RecipeCard'
import homeImageBackground from "../images/homeBackground.png"

export default function CookBook() {
    const navigate = useNavigate()
    return (
        <section className="relative ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-32 md:pb-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Background image */}
                        <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
                            <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                            <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div>
                        </div>


                        {/* Background image */}

                        <motion.div
                            // className="md:-mt-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}

                            className='flex justify-center items-center py-4 px-1 
                        bg-white shadow-lg rounded-xl  bg-clip-padding bg-opacity-10
                        w-full flex-col '>
                            <div className='py-3'> <img src={CookBookk} className='' height={120} width={400} /></div>

                            {/* Search block */}
                            <div className="w-[90%] mx-[5%]  lg:w-8/12  ">
                                <div className="flex justify-center  md:mt-6">
                                    <input type="tel" className=" w-full h-full  pl-4 rounded-l-full  py-3" placeholder="Search what you want..." aria-label="Phone number" />
                                    <button className="text-white bg-gradient-to-r from-orange-100 to-orange-50
                                      shrink-0 rounded-r-full px-6 text-center">Search</button>
                                </div>
                                {/* Success message */}
                            </div>
                            <div className="md:w-[90%] md:mx-[5%] flex w-full md:flex-row flex-col pt-4 justify-start items-start space-x-0 space-y-3 md:space-y-0 md:space-x-2 lg:w-9/12   ">
                                {/* Left Side */}
                                <div className='flex-[30%] flex md:flex-col w-full justify-center items-center  flex-row md:space-x-0 space-x-2 bg-white bg-opacity-30 rounded-xl'>
                                    <button

                                        className="rounded-full w-52
            bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  flex items-center justify-center border border-transparent px-14 py-2.5
             my-2  text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                                    >
                                        Get Started!
                                    </button>
                                    <button

                                        className="w-52
               md:mx-0 bg-clip-padding bg-opacity-25 bg-white
            font-medium  flex items-center justify-center border border-transparent px-14 py-2.5
             my-2 rounded-full text-gray-800  transition duration-150 ease-in-out"
                                    >
                                        List name
                                    </button>
                                </div>
                                {/* Right Side */}
                                <div className='flex-[70%] '>
                                    <RecipeCard />
                                    <RecipeCard />
                                </div>
                            </div>
                        </motion.div>



                    </div></div></div></section>

    )
}
