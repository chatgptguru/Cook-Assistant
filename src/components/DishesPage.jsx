import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recipeA from '../images/recipeA.png'
import recipeB from '../images/recipeB.png'
import homeImageBackground from "../images/homeBackground.png"
import recipeC from '../images/recipeC.png'
import { useDispatch, useSelector } from 'react-redux';
import GenerateDishes from './open-ai/GenerateDishes';

import { Scrollbars } from 'react-custom-scrollbars';
import GenerateDishesTwo from './open-ai/GenerateDishesTwo';
import { setPrompt } from '../redux/recipes';
// import parse from 're'

export default function DishesPage() {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { prompt } = useSelector((state) => state.prompt)
  const { promptTwo } = useSelector((state) => state.promptTwo)
  const { ingredients } = useSelector((state) => state.ingredients)
  const [isDishClicked, setIsDishClicked] = useState(false)

  const promptForDish1 = `please provide a title for a recipe that \r\n  include these ingredients ${ingredients?.IncludedIngredients} and excluding these ingredients : ${ingredients?.ExcludedIngredients}.. You will provide them with a very detailed answer for their selected dish, based off the selected dish description. Make sure to include a complete and detailed set of instructions that anyone could follow, full ingredients list, the total prep time and cook time, along with calories per serving, and a basic estimated nutritional value section, ${ingredients?.Language ? `in ${ingredients?.Language} Language` : ""}`

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



                <div onClick={() => navigate("/discover-dishes")} className="my-3 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                  </svg>
                </div>
                <p className="h4 mb-4 text-gray-200">
                  {prompt}
                </p>
                <div className=''>
                  <GenerateDishes prompt={`Please generate a title for this description ${prompt}`} />
                </div>

              </div>
              <div className='fixed 
             flex  md:flex-row flex-col md:space-x-6  md:mx-2
              md:w-full w-[90%] mx-[5%]
                  z-90 bottom-10 '>
                <div className='flex justify-center items-center space-x-6 '>
                  <button
                    onClick={() => dispatch(setPrompt(promptForDish1))}
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
      </div >
    </section >
  );
}
