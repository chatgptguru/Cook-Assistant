import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recipeA from '../images/recipeA.png'
import recipeB from '../images/recipeB.png'
import Swal from 'sweetalert';
import homeImageBackground from "../images/homeBackground.png"
import recipeC from '../images/recipeC.png'
import GenerateImageRecipe from './open-ai/GenerateImageRecipe';
import { useDispatch, useSelector } from 'react-redux';
import GenerateInstructions from './open-ai/GenerateInstructions';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db, auth, firestoredDB } from "../config/firebase";
import GenerateRecipe from './open-ai/GenerateDishes';
import { Configuration, OpenAIApi } from "openai";
import { setRecipe1 } from '../redux/recipes';

function RecipeDetails() {

  const navigate = useNavigate()

  const moviesCollectionRef = collection(firestoredDB, "CookBook");


  const { recipe1, recipes } = useSelector((state) => state.recipe)
  const { image } = useSelector((state) => state.image)
  const { prompt } = useSelector((state) => state.prompt)
  const { ingredients } = useSelector((state) => state.ingredients)
  const { instructions } = useSelector((state) => state.instructions)

  const ingredientsAndInstructions = `Write a recipe based on these ingredients and instructions: \r\n 1-${ingredients.IncludedIngredients}`

  // Add a new document in collection "recipes"
  const onSubmitRecipe = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        userId: auth?.currentUser?.uid,
        title: recipe1,
        description: instructions || null,
        ingredients: ingredients || null,
        imageUrl: image || null

      });

      Swal({
        icon: "success",
        title: "Recipe added successfully",
        showConfirmButton: false,
        timer: 3000,
        confirmButtonColor: '#f0481a',

      });
    } catch (err) {
      console.log(err.message);
      Swal({
        icon: "info",
        title: err.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };


  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);


  // import.meta.env.VITE_Open_AI_Key
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const dispatch = useDispatch()


  const generateRecipe = async () => {
    setLoading(true)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.89,
      max_tokens: 400,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    setLoading(false)
    setResult(response.data.choices[0].text)
    dispatch(setRecipe1(response.data.choices[0].text));
  };

  useEffect(() => {
    generateRecipe()
  }, [])

  return (
    <section className="relative ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Background image */}
            <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
              <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
              {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div> */}
            </div>

            <article>

              {/* Article content */}
              <div className="text-lg pb-20  bg-[#2a93dd40] px-4 py-4 rounded-xl h-screen overflow-y-scroll   text-gray-400">

                <figure className=" flex justify-center">
                  <GenerateImageRecipe prompt={prompt} />
                </figure>
                <div className='my-4 text-white font-bold text-xl flex justify-start'><pre>
                  {recipe1}
                </pre>
                </div>
                <div className=''>
                  <GenerateInstructions prompt={ingredientsAndInstructions} />
                </div>
              </div>


            </article>

            <div className='fixed flex md:space-x-3 md:flex-row flex-col   md:mx-2  md:w-full w-[90%] mx-[5%]    z-90 bottom-10 '>
              <div className='flex space-x-2 justify-center items-center '>
                <button
                  // onClick={openModal}
                  onClick={onSubmitRecipe}
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

            </div>

          </div>
        </div>
      </div>
    </section >
  );
}

export default RecipeDetails;