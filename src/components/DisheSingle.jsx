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
  const { prompt } = useSelector((state) => state.prompt)
  const { ingredients } = useSelector((state) => state.ingredients)
  const [add, setAdd] = useState("Add To CookBook")

  const ingredientsAndInstructions = `Write a recipe ingredients and instructions for this recipe ${recipe1}: \r\n  using ${ingredients.IncludedIngredients} and execlude these ingredients : ${ingredients.ExcludedIngredients}.`

  // const ingredientsAndInstructions = `Pleae provide ingredients for this recipe ${recipe1}, put ingredients title in h2 tag and ingredients in list html tag,also Please provide instructions for this recipe ${recipe1}, put instructions title in h2 tag and instructions in list html tag, `
  // Add a new document in collection "cities"
  const onSubmitRecipe = async () => {
    setAdd("Adding...")
    try {
      await addDoc(moviesCollectionRef, {
        userId: auth?.currentUser?.uid,
        description: recipe1 || null,
        ingredients: ingredients || null,
        imageUrl: image || null,
        title: "",
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

      // console.log(err.message);

      Swal({
        icon: "info",
        title: err.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <section className="relative  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-32 md:pb-40">
          <div className="max-w-4xl mx-auto">
            {/* Background image */}
            <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
              <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
              {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div> */}
            </div>

            {/* <Scrollbars autoHeight
              autoHeightMax={400}> */}

            {/* Article content */}
            <div className="text-lg pb-20 bg-[#2a93dd40] px-4 py-4 rounded-xl   text-gray-400">

              <figure className=" flex justify-center">
                {/* <img className="  h-auto w-full" src={recipeB} alt="News inner" /> */}
                <GenerateImageRecipe prompt={prompt} />
                {/* <figcaption className="text-sm text-center text-gray-500 mt-3">Photo by Helena Lopes on Unsplash</figcaption> */}
              </figure>
              {/* <h3 className="h3 mb-4 text-gray-200">Duck Confit with Garlic and Herbs: </h3> */}

              <pre className='bg-white cursor-pointer bg-opacity-20 text-white my-2 transition duration-150 hover:scale-105 p-2 rounded-2xl'>
                {/* This dish features tender and flavorful duck legs that are slow-cooked in their own fat, served with a side of garlic and herb mashed potatoes. Duck confit is a traditional French dish that is perfect for a hearty and satisfying meal. */}

                {recipe1}
              </pre>
              <h4 className="font-medium text-primary-600 mb-8">Ingredients  & Cooking Directions:</h4>
              <GenerateInstructions prompt={ingredientsAndInstructions} />

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

            {/* </Scrollbars> */}


          </div>
        </div>
      </div>
    </section >
  );
}

export default DisheSingle;