import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



import recipeA from '../images/recipeA.png'
import recipeB from '../images/recipeB.png'

import homeImageBackground from "../images/homeBackground.png"
import recipeC from '../images/recipeC.png'
import CustomModal from './alerts/CustomModal';

function DisheSingle() {

  const navigate = useNavigate()
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <section className="relative ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Background image */}
            <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
              <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
              <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div>
            </div>

            <article>

              {/* Article content */}
              <div className="text-lg pb-20 text-gray-400">


                <figure className="mb-8 flex justify-center">
                  <img className="md:w-[80%] md:h-96 h-auto w-full" src={recipeB} alt="News inner" />
                  {/* <figcaption className="text-sm text-center text-gray-500 mt-3">Photo by Helena Lopes on Unsplash</figcaption> */}
                </figure>
                <h3 className="h3 mb-4 text-gray-200">Duck Confit with Garlic and Herbs: </h3>
                <p className="mb-8">
                  This dish features tender and flavorful duck legs that are slow-cooked in their own fat, served with a side of garlic and herb mashed potatoes. Duck confit is a traditional French dish that is perfect for a hearty and satisfying meal.


                </p>
                <h4 className="font-medium text-primary-600 mb-8">Ingredients  & Cooking Directions:</h4>
                <ul className="list-disc list-inside mb-8">
                  <li>Aenean sed adipiscing diam donec adipiscing tristique.</li>
                  <li>Urna nunc id cursus metus aliquam eleifend.</li>
                  <li>Arcu dictum varius duis at consectetur lorem donec massa sapien.</li>
                  <li>Sed risus ultricies tristique nulla aliquet.</li>
                </ul>

                <p className="mb-8">
                  Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio tristique senectus et netus et. Nibh nisl condimentum id venenatis:
                </p>
                <h4 className="h4 text-gray-200 mb-4">1. The quick brown fox jumped over the lazy dog.</h4>
                <p className="mb-8">
                  Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
                </p>
                <h4 className="h4 text-gray-200 mb-4">2. The quick brown fox jumped over the lazy dog.</h4>
                <p className="mb-8">
                  Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
                </p>
                <p className="mb-8">
                  Bibendum enim facilisis gravida neque convallis. Convallis posuere morbi leo urna molestie turpis in eu mi bibendum neque egestas. Est ante in <Link to="#" className="text-gray-200 underline hover:no-underline">nibh mauris cursus mattis molestie</Link> aliquam purus sit amet luctus vulputate sapien nec sagittis aliquam enim nec dui nunc mattis enim, sit amet nulla facilisi morbi tempus iaculis urna id. Blandit cursus risus at ultrices mi tempus imperdiet nulla.
                </p>
                <h3 className="h3 mb-4 text-gray-200">Conclusions</h3>
                <p className="mb-8">
                  Sapien nec sagittis aliquam malesuada orci sagittis eu volutpat odio facilisis mauris sit amet massa, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo, purus viverra accumsan in nisl nisi scelerisque. Vel pharetra vel turpis nunc eget lorem malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tempus quam pellentesque nec nam aliquam sem et tortor consequat.
                </p>
              </div>


            </article>

            <div className='fixed flex md:space-x-3 md:flex-row flex-col   md:mx-2  md:w-full w-[90%] mx-[5%]    z-90 bottom-10 '>
              <div className='flex space-x-2 justify-center items-center '>
                <button
                  onClick={openModal}
                  className="
            bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  border border-transparent w-40 p-2.5
             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                >
                  Add to Cookbook
                </button>
                <button
                  className="
            bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  flex items-center justify-center border border-transparent w-40 p-2.5
             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                >
                  Find Varient
                </button>
              </div>
              <div className='flex space-x-2 justify-center items-center'>
                <button
                  onClick={() => navigate('/get-dishes')}
                  className="
            bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  flex items-center justify-center border border-transparent w-40 p-2.5
             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                >
                  Back to Dishes
                </button>
                <button
                  onClick={() => navigate('/discover-dishes')}
                  className="
            bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  flex items-center justify-center border border-transparent w-40 p-2.5
             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                >
                  Start Fresh
                </button>
              </div>
              <CustomModal openModal={openModal} closeModal={closeModal} isOpen={isOpen} />

            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

export default DisheSingle;