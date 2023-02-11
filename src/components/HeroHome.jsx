import React from 'react'
import bigTitle from '../images/bigTitle.png'
import justAsk from '../images/justAsk.png'
import recipe from '../images/recipe.png'
import appStore from '../images/appStore.png'
import playStore from '../images/playStore.png'

export default function HeroHome() {
    return (
        <section>
            <div className="max-w-6xl  mx-auto  px-4 sm:px-6">
                <div className="pt-28 pb-10  md:pb-16 flex md:flex-row flex-col">
                    <div className='md:flex-[60%] flex-col md:space-y-1 space-y-6'>
                        <div>
                            <img src={bigTitle} className="w-auto h-auto p-4" alt="desc" />
                            <img src={justAsk} className="w-auto h-auto p-4" alt="desc" />
                            <button
                                className="
                            bg-gradient-to-r from-orange-100 to-orange-50 md:ml-[3%] mx-[5%] md:mx-0 w-[90%] md:w-[40%]
                            font-medium  flex items-center justify-center border border-transparent px-14 py-2.5
                             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                            >
                                Get Started!
                            </button>
                        </div>
                        <div>

                            <form className="w-2/3  lg:w-1/2 ml-[3.5%] md:mt-28 hidden md:block">
                                <div className="flex justify-center  ">
                                    <input type="tel" className="form-input w-full h-full  pl-4 rounded-l-full  py-2.5" placeholder="Email" aria-label="Phone number" />
                                    <button className="text-white bg-gradient-to-r from-orange-100 to-orange-50
                                      shrink-0 rounded-r-full px-6 text-center">Join</button>
                                </div>
                                {/* Success message */}
                                <p className=" text-white lg:text-left lg:absolute mt-2
                                 opacity-75 text-sm font-medium text-start">Join our mailing list for exclusive offers!</p>
                            </form>
                        </div>
                    </div>

                    <div className='md:flex-[40%]  md:h-auto
                     flex flex-col justify-center items-center order-2'>
                        <img src={recipe} className=" 
                          rounded-full  h-56 w-56 md:w-auto md:h-auto
                         px-10 py-2 
                         " />
                        <form className="w-[90%] mx-[5%]  lg:w-1/2  md:mt-28 block md:hidden">
                            <div className="flex justify-center  ">
                                <input type="tel" className="form-input w-full h-full  pl-4 rounded-l-full  py-2.5" placeholder="Email" aria-label="Phone number" />
                                <button className="text-white bg-gradient-to-r from-orange-100 to-orange-50
                                      shrink-0 rounded-r-full px-6 text-center">Join</button>
                            </div>
                            {/* Success message */}
                            <p className=" text-white lg:text-left lg:absolute mt-2
                                 opacity-75 text-sm font-medium text-start">Join our mailing list for exclusive offers!</p>
                        </form>
                        <div className='flex space-x-4 mt-6 justify-center items-center'>
                            <div><img src={playStore} /></div>
                            <div><img src={appStore} /></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
