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
import GenerateRecipe from './open-ai/GenerateRecipe';
import { Configuration, OpenAIApi } from "openai";
import { setRecipe1 } from '../redux/recipes';

function CBkDisheDetails() {

  const navigate = useNavigate()

  const moviesCollectionRef = collection(firestoredDB, "CookBook");


  const { recipe1, recipes } = useSelector((state) => state.recipe)
  const { image } = useSelector((state) => state.image)
  const { prompt } = useSelector((state) => state.prompt)
  const { ingredients } = useSelector((state) => state.ingredients)

  const ingredientsAndInstructions = `Write a recipe based on these ingredients and instructions: \r\n 1-${ingredients.IncludedIngredients}`

  // Add a new document in collection "cities"
  const onSubmitRecipe = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        userId: auth?.currentUser?.uid,
        description: recipe1 || null,
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
      // console.error(err);
      console.log(err.message);
      // err.message === "Network Error"
      //   ? Swal({
      //     icon: "warning",
      //     title: "No internet connection. Please check your network",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   })
      //   : err.message === "Request failed with status code 403"
      //     ? Swal({
      //       icon: "error",
      //       title: "Password not correct",
      //       showConfirmButton: false,
      //       timer: 1500,
      //     })
      //     :
      Swal({
        icon: "info",
        title: err.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // useEffect(() => {
  //   onSubmitRecipe()
  // }, [])

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );


  // import.meta.env.VITE_Open_AI_Key
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const dispatch = useDispatch()

  const text = "Write 3 dishes in the format : name of the dish with number and the discription of each dishe based on these ingredients : Ingredients:  Fritos, Chili, Shredded cheddar cheese, Sweet white or red onions, diced small Sour cream"

  const generateRecipe = async () => {
    setLoading(true)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.3,
      max_tokens: 120,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });
    // console.log(JSON.stringify(response.data.data))
    // console.log(result)
    setLoading(false)
    // setResult(response.data.choices)
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
              <div className="text-lg pb-20   text-gray-400">

                <figure className=" flex justify-center">
                  {/* <img className="  h-auto w-full" src={recipeB} alt="News inner" /> */}
                  <GenerateImageRecipe prompt={prompt} />
                  {/* <figcaption className="text-sm text-center text-gray-500 mt-3">Photo by Helena Lopes on Unsplash</figcaption> */}
                </figure>
                {/* <h3 className="h3 mb-4 text-gray-200">Duck Confit with Garlic and Herbs: </h3> */}
                <p className="mb-8 text-gray-200" >
                  {/* This dish features tender and flavorful duck legs that are slow-cooked in their own fat, served with a side of garlic and herb mashed potatoes. Duck confit is a traditional French dish that is perfect for a hearty and satisfying meal. */}

                  {/* <GenerateRecipe prompt={prompt} /> */}
                  {loading ?
                    <>
                      <h2>Generating..Please Wait..</h2>
                    </>
                    :
                    <>

                      <div className='bg-white cursor-pointer bg-opacity-20 my-2 transition duration-150 hover:scale-105 p-2 rounded-2xl'>
                        <h4 className="h5 text-gray-200 mb-4 font-bold"></h4>
                        {/* <p className="mb-8 text-gray-200">
                            {result.length > 0 && recipes}
                        </p> */}
                        <p className="mb-8 text-gray-200">
                          {recipe1}
                        </p>

                      </div>


                    </>
                  }
                </p>
                <h4 className="font-medium text-primary-600 mb-8">Ingredients  & Cooking Directions:</h4>
                <GenerateInstructions prompt={ingredientsAndInstructions} />
                {/* <ul className="list-disc list-inside mb-8">
                  <li>Aenean sed adipiscing diam donec adipiscing tristique.</li>
                  <li>Urna nunc id cursus metus aliquam eleifend.</li>
                  <li>Arcu dictum varius duis at consectetur lorem donec massa sapien.</li>
                  <li>Sed risus ultricies tristique nulla aliquet.</li>
                </ul>


                <h4 className="h4 text-gray-200 mb-4">2. The quick brown fox jumped over the lazy dog.</h4>
                <p className="mb-8">
                  Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
                </p> */}


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

export default CBkDisheDetails;