import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import homeImageBackground from "../images/homeBackground.png"
import title from "../images/title.png"
import { motion } from 'framer-motion'
import DisheOption from '../components/DisheOption'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GenerateRecipe from '../components/open-ai/GenerateRecipe'
import { setPrompt } from '../redux/prompt'
import { setIngredients } from '../redux/ingredients'
import ResetPassword from './ResetPassword'
import EmailVerification from '../components/EmailVerification'

const initialState = {
    Culture: "",
    IncludedIngredients: "",
    ExcludedIngredients: "",
    Description: "",
    Occasion: "",
    Language: "",
    FreeFlow: ""
};


export default function DiscoverDishes() {


    const [values, setValues] = useState(initialState);
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    // const [prompt, setPrompt] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [isDishePages, setDishesPage] = useState(true)
    const switchTabs = () => {
        setDishesPage(!isDishePages)
    }
    const { Culture, IncludedIngredients, ExcludedIngredients, Description, Occasion, Language, FreeFlow } = values;
    // const { Culture, IncludedIngredients, ExcludedIngredients, Description, Occasion, Language, FreeFlow } = values;
    // let prompt = `Create a dishe with the following format: dish name, followed by a description : ${Description}
    // \n\nEnsure that the occasion is ${Occasion} occasion and 
    //  includes these ingredients :${IncludedIngredients}, excluding
    //   these ingredients ${ExcludedIngredients}.\n\nAlso Ensure that the culture is ${Culture} culture.
    //   Also ensure to include to include this free flow ${FreeFlow} for this ${Language} language 
    //   `

    let prompt = `Let's cook up something delicious! Please find me a ${Culture} recipe that  ${FreeFlow} includes the ingredients ${IncludedIngredients}, but does not contain ${ExcludedIngredients}. It should be ${Description} and be suit no able for ${Occasion}. Please write the recipe in ${Language}.`

    // let prompt = `Generate a recipe with the following format: dish name wih h2 html tag, followed by a description, using h4 html tag of each dish based on the specified ingredients.\n\nEnsure that each recipe is suitable for a ${Occasion} and includes these ingredients :${IncludedIngredients} and excluding these ingredients ${ExcludedIngredients}. Provide a detailed description for each recipe, including step-by-step instructions and cooking tips to ensure that the dish turns out perfectly.\n\nIncorporate a unique language element that ties the recipe to the ${Culture} culture, making it authentic and culturally appropriate. Don't forget to include the following variables in each recipe:\n\n- Occasion: ${Occasion}\n- Excluded Ingredients: ${ExcludedIngredients}\n- Included Ingredients: ${IncludedIngredients}\n- Culture: ${Culture}\n- Language: ${Language}`

    // let prompt = `Create a step-by-step recipe using the all of the following ingredients, as well as adding in others as appropriate:  please include these ingredients  ${IncludedIngredients}. Do not use or include these ingredients: ${ExcludedIngredients}. The recipe should follow this culture: ${Culture}.
    // The recipe should be appropriate to this language: 
    // ${Language}
    // The recipe should follow this Description
    // ${Description}.

    // The recipe should follow this FreeFlow
    // ${FreeFlow}.

    // Return the result as HTML.
    // The result should be laid out as follows:

    // Start with a H2 tag where the recipe is given a name based on what is generated.

    // "Equipment You Will Need:" (H3 tag, list the equipment needed to prepare the recipe)

    // "Ingredients You Will Need:" (H3 tag, list the equipment needed to prepare the recipe)
    // "Steps:" (H3 tag, list the steps required to prepare the recipe)
    // `


    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(setPrompt(prompt))
        dispatch(setIngredients(values))
        isDishePages ? navigate('/get-dishes') : navigate('/get-recipe')
        // console.log(JSON.stringify(values))

        // dispatch(`Write 3 dishes in the format : name of the dish with number and the discription of each dishe based on these ingredients:  ${IncludedIngredients},also  ${}`)
        // navigate('/discover-dishes')
        // dispatch(`Write a recipe for a dish that is tied t culture and incorporates a unique language element. The recipe should include specific ingredients while excluding others, and be suitable for a particular occasion. Additionally, the recipe should be written following a detailed description, including step-by-step instructions and cooking tips.`)


        // }>

    }



    return (
        <div className="flex flex-col  relative min-h-screen  overflow-hidden bg-hero-pattern">
            {/* Background image */}
            <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
                <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div> */}
            </div>

            <Header />

            <div className="pt-32 pb-10 lg:pt-40 lg:pb-16 justify-center items-center   flex md:flex-row flex-col">
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



                    className='lg:w-[55%] rounded-xl md:w-[90%] p-2  md:pt-6 py-2 space-y-3 pb-10 
                    bg-white shadow-xl  bg-clip-padding bg-opacity-25  
                    '>  <EmailVerification />
                    {/* Header */}
                    <div className='flex mx-4 my-2 justify-center items-center'>
                        <img src={title} alt='title' />
                    </div>


                    {/* Buttons */}
                    <div className='flex  md:py-4  justify-center items-center space-x-2 md:space-x-8 '>
                        {/* Button 2 */}
                        <div>
                            <button
                                onClick={() => setDishesPage(true)}
                                // onClick={() => navigate('/signin')}
                                className="btn hover:animate-pulse
                            bg-gradient-to-r from-orange-100 to-orange-50 md:w-40 w-full
                            font-medium  flex items-center justify-center border border-transparent rounded-md
                             text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                            >
                                Get Dishes
                            </button>
                        </div>
                        {/* Button 1 */}
                        <div >
                            <button
                                onClick={() => setDishesPage(false)}
                                className="btn hover:animate-pulse
                            bg-gradient-to-r from-teal-500 to-primary-600  md:w-40 w-full
                            font-medium  flex items-center justify-center border border-transparent rounded-md
                             text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">
                                Get Recipe
                            </button>
                        </div>

                    </div>

                    {/* Fields */}
                    <form onSubmit={onSubmit} className=''>
                        <div className='flex flex-col justify-center items-center'>
                            <DisheOption
                                name="Culture"
                                value={values.Culture}
                                handleChange={handleChange}
                                isDishePages={isDishePages}
                                title="Culture or Type"
                                placeholder="Italian, Somali, Chinese, American" />
                            <DisheOption
                                name="IncludedIngredients"
                                value={values.IncludedIngredients}
                                handleChange={handleChange}
                                isDishePages={isDishePages}
                                title="Ingredients Included"
                                placeholder="Chicken, Mushrooms, Red Chili Flakes" />
                            <DisheOption
                                name="ExcludedIngredients"
                                value={values.ExcludedIngredients}
                                handleChange={handleChange}
                                isDishePages={isDishePages} title="Ingredients Excluded" placeholder="Broccoli, Craft Cheese, Fish" />
                            <DisheOption
                                name="Description"
                                value={values.Description}
                                handleChange={handleChange}
                                isDishePages={isDishePages} title="Description or Taste" placeholder="Spicy, Easy to Cook, 18th Century, Savory, Exotic" />
                            <DisheOption
                                name="Occasion"
                                value={values.Occasion}
                                handleChange={handleChange}
                                isDishePages={isDishePages} title="For What Occasion" placeholder="First Date, Quick Dinner, Breakfast With The Kids, Lazy Sunday" />
                            <DisheOption
                                name="Language"
                                value={values.Language}
                                handleChange={handleChange}
                                isDishePages={isDishePages} title="What Language" placeholder="Somali, Spanish, French, Arabic, Chinese" />
                            <DisheOption
                                name="FreeFlow"
                                value={values.FreeFlow}
                                handleChange={handleChange}
                                isDishePages={isDishePages} title="Free Flow" placeholder="Cook-E! Please find me something for breakfast that has bacon ..." />
                        </div>
                        <div>
                            {/* Button 1 */}
                            <div className='flex justify-between '>
                                <button
                                    type='reset'
                                    onClick={() => setValues(initialState)}
                                    className={`
                                 hover:animate-pulse
                              font-bold md:w-48 w-full mx-[5%] flex justify-center items-center
                              border-2 border-gray-50 rounded-md
                             text-white  transition duration-150 ease-in-out  md:mt-5
                                `}>
                                    Clear
                                </button>
                                <button
                                    type="submit"
                                    // onClick={() => isDishePages ? navigate('/get-dishes') : navigate('/dishe-details')}
                                    className={`
                                btn hover:animate-pulse
                            bg-gradient-to-r ${isDishePages ? "from-orange-100 to-orange-50" : "from-teal-500 to-primary-600"} font-bold md:w-48 w-full mx-[5%]
                            flex items-end justify-end border border-transparent rounded-md
                             text-white  transition duration-150 ease-in-out md:mt-5
                                `}>
                                    {isDishePages ? "Get Dishes" : "Ges Recipes"}
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* Discover */}

                </motion.div>
            </div >
        </div >
    )
}
