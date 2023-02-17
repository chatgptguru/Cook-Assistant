import React from 'react'
import Header from '../components/Header'
import homeImageBackground from "../images/homeBackground.png"
import title from "../images/title.png"
import { motion } from 'framer-motion'
import DisheOption from '../components/DisheOption'
import { useNavigate } from 'react-router-dom'

export default function DiscoverDishes() {
    const navigate = useNavigate()
    const isSubmiting = navigate.state === "submitting"
        ? "Saving..."
        : navigate.state === "loading"
            ? "Saved!"
            : "Go";


    return (
        <div className="flex flex-col  relative   overflow-hidden bg-hero-pattern">
            {/* Background image */}
            <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
                <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div>
            </div>

            <Header />
            <div className="pt-24 pb-10 justify-center items-center  md:pb-16 flex md:flex-row flex-col">
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


                    className='md:w-[60%] rounded-xl   md:pt-6 py-2 space-y-3 pb-10 
                    bg-white shadow-xl  bg-clip-padding bg-opacity-25  
                    '>
                    {/* Header */}
                    <div className='flex mx-4  justify-center items-center'>
                        <img src={title} alt='title' />
                    </div>


                    {/* Buttons */}
                    <div className='flex  md:py-4  justify-center items-center space-x-2 md:space-x-8 '>
                        {/* Button 2 */}
                        <div>
                            <button
                                // onClick={() => navigate('/signin')}
                                className="btn hover:animate-pulse
                            bg-gradient-to-r from-orange-100 to-orange-50 w-40
                            font-medium  flex items-center justify-center border border-transparent rounded-md
                             text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                            >
                                Get Dishes
                            </button>
                        </div>
                        {/* Button 1 */}
                        <div >
                            <button className="btn hover:animate-pulse
                            bg-gradient-to-r from-teal-500 to-primary-600 w-40
                            font-medium  flex items-center justify-center border border-transparent rounded-md
                             text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">
                                Get Recipe
                            </button>
                        </div>

                    </div>

                    {/* Fields */}
                    <div className='flex flex-col justify-center items-center'>
                        <DisheOption title="Culture or Type" placeholder="Example: Italian, Somali, Chinese, American" />
                        <DisheOption title="Ingredients Included" placeholder="Example: Chicken, Mushrooms, Red Chili Flakes" />
                        <DisheOption title="For What Occasion" placeholder="Example: First Date, Quick Dinner, Breakfast With The Kids, Lazy Sunday" />
                        <DisheOption title="What Language" placeholder="Example: Somali, Spanish, French, Arabic, Chinese" />
                        <DisheOption title="Free Flow" placeholder="Example: Cook-E! Please find me something for breakfast that has bacon ..." />

                    </div>
                    {/* Discover */}
                    <div>
                        {/* Button 1 */}
                        <div className='flex justify-end items-end md:mx-[2%]'>
                            <button
                                onClick={() => navigate('/get-dishes')}
                                className="btn hover:animate-pulse
                           bg-gradient-to-r from-orange-100 to-orange-50 font-bold md:w-48 w-full mx-[5%]
                         flex items-end justify-end border border-transparent rounded-md
                             text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">
                                Get Recipe
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
