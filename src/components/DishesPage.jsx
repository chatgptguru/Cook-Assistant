import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recipeA from '../images/recipeA.png'
import recipeB from '../images/recipeB.png'
import homeImageBackground from "../images/homeBackground.png"
import recipeC from '../images/recipeC.png'
import { useSelector } from 'react-redux';
import GenerateRecipe from './open-ai/GenerateRecipe';

import { Scrollbars } from 'react-custom-scrollbars';
// import parse from 're'

export default function DishesPage() {

  const navigate = useNavigate()
  const { prompt } = useSelector((state) => state.prompt)

  return (

    <section className="relative min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-28 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
              <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
              <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div>

            </div>

            {/* <Scrollbars style={{ height: 500, paddingRight: '8px' }} */}
            <article className='overflow-x-hidden bg-[#2a93dd40] rounded-xl px-8'>

              {/* Article content */}
              <div className="text-lg pb-20 text-gray-400">


                <figure className="mb-8">
                  {/* <figcaption className="text-sm text-center text-gray-500 mt-3">Photo by Helena Lopes on Unsplash</figcaption> */}
                </figure>

                <p className="h4 mb-4 text-gray-200">
                  {prompt}
                </p>
                <GenerateRecipe prompt={prompt} />
                {/* <GenerateRecipe2 prompt={prompt} /> */}
                {/* <GenerateRecipe prompt={prompt} />
                <GenerateRecipe prompt={prompt} /> */}
                {/* <div onClick={() => navigate('/dishe-details')} className='bg-white cursor-pointer bg-opacity-20 my-2 transition duration-150 hover:scale-105 p-2 rounded-2xl'>
                  <h4 className="h5 text-gray-200 mb-4 font-bold">Dish 1. Pan-Seared Duck Breast with Red Wine Reduction: </h4>
                  <p className="mb-8 text-gray-200">
                    This dish features a succulent duck breast that is pan-seared to perfection, served with a rich and flavorful red wine reduction sauce. This dish is a classic French recipe that is perfect for a dinner party with gourmet foodie friends.
                  </p>
                </div>
                <div onClick={() => navigate('/dishe-details')} className='bg-white cursor-pointer bg-opacity-20 transition duration-150 hover:scale-105 p-2 rounded-2xl'>
                  <h4 className="h5 font-bold text-gray-200 mb-4 ">Dish 2. Duck Confit with Garlic and Herbs:  </h4>
                  <p className="mb-8 text-gray-200">This dish features tender and flavorful duck legs that are slow-cooked in their own fat, served with a side of garlic and herb mashed potatoes. Duck confit is a traditional French dish that is perfect for a hearty and satisfying meal.
                  </p>
                </div> */}


              </div>
              <div className='fixed 
             flex  md:flex-row flex-col md:space-x-6  md:mx-2
              md:w-full w-[90%] mx-[5%]
                  z-90 bottom-10 '>
                <div className='flex justify-center items-center space-x-6 '>
                  <button
                    onClick={() => navigate('/dishe-details')}
                    className="bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  border border-transparent w-40 p-2.5
             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                  >
                    Dish 1
                  </button>
                  <button
                    onClick={() => navigate('/dishe-details')}
                    className="
            bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  flex items-center justify-center border border-transparent w-40 p-2.5
                 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                  >
                    Dish 2
                  </button>
                </div>
                <div className='flex space-x-6  justify-center items-center '>
                  <button
                    onClick={() => navigate('/dishe-details')}
                    className="
                  bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
                    font-medium  flex items-center justify-center border border-transparent w-40 p-2.5
                     my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                  >
                    Dish 3
                  </button>
                  <button
                    onClick={() => navigate('/get-dishes')}
                    className="
          bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  flex items-center justify-center border border-transparent w-40 p-2.5
             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                  >
                    3 New Dishes
                  </button>
                </div>


              </div>

            </article>
            {/* </Scrollbars> */}




          </div>
        </div>
      </div>
    </section >
  );
}
