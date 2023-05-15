import React from 'react'
import bigTitle from '../images/bigTitle.png'
import justAsk from '../images/justAsk.png'
import recipe from '../images/recipe.png'
import appStore from '../images/appStore.png'
import playStore from '../images/playStore.png'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import homeImageBackground from "../images/homeBackground.png"

export default function HeroHome() {
    const navigate = useNavigate()
    return (
        <section className="relative min-h-screen ">
            <div className=" mx-0 px-4 sm:px-6">
                <div className="pt-32 pb-10 md:pt-40 md:pb-16">
                    <div className="max-w-7xl mx-auto">

                        {/* Background image */}
                        <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
                            <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                            <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div>
                        </div>



                        <div className=" flex lg:flex-row flex-col">
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

                                className='md:flex-[60%] flex-col md:space-y-6 space-y-6'>
                                <div className='md:space-y-6'>
                                    <img src={bigTitle} className="w-auto h-auto p-4" alt="desc" />
                                    <img src={justAsk} className="w-auto h-auto p-4" alt="desc" />
                                    <button
                                        onClick={() => navigate('/signin')}
                                        className="
                            bg-gradient-to-r from-orange-100 to-orange-50 md:ml-[3%] mx-[5%] md:mx-0 w-[90%] lg:w-[40%]
                            font-medium  flex items-center justify-center border border-transparent px-14 py-2.5
                             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                                    >
                                        Get Started!
                                    </button>
                                </div>
                                <div>

                                    <form className="w-2/3  lg:w-1/2 ml-[3.5%] md:mt-28 hidden lg:block">
                                        <div className="flex justify-center  ">
                                            <input type="tel" className=" w-full h-full  pl-4 rounded-l-full  py-3" placeholder="Email" aria-label="Phone number" />
                                            <button className="text-white bg-gradient-to-r from-orange-100 to-orange-50
                                      shrink-0 rounded-r-full px-6 text-center">Join</button>
                                        </div>
                                        {/* Success message */}
                                        <p className=" text-white lg:text-left lg:absolute mt-2
                                 opacity-75 text-sm font-medium ml-3 text-start">Join our mailing list for exclusive offers!</p>
                                    </form>
                                </div>
                            </motion.div>

                            <motion.div
                                className="md:-mt-20"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: +50 },
                                    visible: { opacity: 1, x: 0 },
                                }}


                                className='md:flex-[40%]  md:h-auto
                     flex flex-col justify-center items-center order-2'>
                                <img src={recipe} className=" 
                          rounded-full  h-56 w-56 md:w-auto md:h-auto
                         px-10 py-2 
                         " />
                                <form className="w-[90%] mx-[5%]  lg:w-1/2  lg:mt-28 block lg:hidden">
                                    <div className="flex justify-center  ">
                                        <input type="tel" className="form-input w-full h-full  pl-4 rounded-l-full  py-2.5" placeholder="Email" aria-label="Phone number" />
                                        <button className="text-white bg-gradient-to-r from-orange-100 to-orange-50
                                      shrink-0 rounded-r-full px-6 text-center">Join</button>
                                    </div>
                                    {/* Success message */}
                                    <p className=" text-white lg:text-left lg:absolute mt-2
                                 opacity-75 text-sm font-medium text-start">Join our mailing list for exclusive offers!</p>
                                </form>
                                <div className='flex space-x-4 mt-6 md:mt-20 justify-center items-center'>
                                    <div><img src={playStore} /></div>
                                    <div><img src={appStore} /></div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div></div>
        </section >
    )
}
