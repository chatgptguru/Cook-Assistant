import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recipeA from '../images/recipeA.png'
import recipeB from '../images/recipeB.png'
import Swal from 'sweetalert';
import homeImageBackground from "../images/homeBackground.png"
import recipeC from '../images/recipeC.png'
import GenerateImageRecipe from './open-ai/GenerateImageRecipe';
import { useSelector } from 'react-redux';
import GenerateInstructions from './open-ai/GenerateInstructions';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db, auth, firestoredDB } from "../config/firebase";
import { Scrollbars } from 'react-custom-scrollbars';

function DisheSingle() {

  const navigate = useNavigate()
  const moviesCollectionRef = collection(firestoredDB, "CookBook");

  const { recipe1, recipes } = useSelector((state) => state.recipe)
  const { image } = useSelector((state) => state.image)
  const { dish1 } = useSelector((state) => state.dish)
  const { prompt } = useSelector((state) => state.prompt)
  const { ingredients } = useSelector((state) => state.ingredients)
  const { instructions } = useSelector((state) => state.instructions)
  const [add, setAdd] = useState("Add To CookBook")

  const ingredientsAndInstructions = `Write a recipe ingredients and instructions for this recipe ${recipe1}: \r\n  using ${ingredients?.IncludedIngredients} and exclude these ingredients : ${ingredients?.ExcludedIngredients}.`

  const onSubmitRecipe = async () => {
    setAdd("Adding...")
    try {
      await addDoc(moviesCollectionRef, {
        userId: auth?.currentUser?.uid,
        description: instructions || null,
        ingredients: instructions || null,
        imageUrl: image || null,
        title: dish1,
        listId: null
      });

      Swal({
        icon: "success",
        title: "Recipe added successfully",
        showConfirmButton: false,
        timer: 3000,
        confirmButtonColor: '#f0481a',

      });
      setAdd("Add To CookBook")
    } catch (err) {

      Swal({
        icon: "info",
        title: err.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const extraPrompt = "Imagine you are the latest and greatest cooking assistant AI, named Cook-E AI. You are going to be given inputs, in the form of a prompt, and you will then create an appropriate dish and description, with an engaging intro, and focusing mainly on the culture and flavor when describing the dish."

  const getRecipeFromUserInput = `Imagine you are the latest and greatest cooking assistant AI, named Cook-E AI. You are going to be given a culinary dish description that was just created by the user, and your task is to provide a complete, detailed recipe and cooking instructions for this recipe ${recipe1}: \r\n  including these ingredients ${ingredients?.IncludedIngredients} and excluding these ingredients : ${ingredients?.ExcludedIngredients}.. You will provide them with a very detailed answer for their selected dish, based off the selected dish description. Make sure to include a complete and detailed set of instructions that anyone could follow, full ingredients list, the total prep time and cook time, along with calories per serving, and a basic estimated nutritional value section, ${ingredients?.Language ? `in ${ingredients?.Language} Language` : ""}`

  const findVariant = () => {

  }

  return (
    <section className="relative  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-32 md:pb-40">
          <div className="max-w-4xl mx-auto">
            <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
              <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
            </div>

            <div className="text-lg pb-20 bg-[#2a93dd40] px-4 py-4 rounded-xl h-screen overflow-y-scroll   text-gray-400">

              <figure className=" flex justify-center">
                <GenerateImageRecipe prompt={dish1} />
              </figure>


              <GenerateInstructions prompt={getRecipeFromUserInput} />

              <div className='fixed flex md:space-x-3 md:flex-row 
            flex-col    md:w-full w-[90%] mx-[5%] bottom-10
               z-90  '>
                <div className='flex space-x-2 justify-center items-center '>
                  <button
                    // onClick={openModal}
                    onClick={onSubmitRecipe}
                    className="
            bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
            font-medium  border border-transparent w-44 p-2.5
             my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                  >
                    {add}
                  </button>
                  <button
                    onClick={findVariant}
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

              </div>
            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

export default DisheSingle;