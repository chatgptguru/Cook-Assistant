import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/message";
import { setRecipe1, setRecipe2, setRecipe3, setRecipes } from "../../redux/recipes";


export default function GenerateRecipe2({ prompt }) {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [placeholder, setPlaceholder] = useState(
        "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
    );

    const { recipe2 } = useSelector((state) => state.recipe);

    // import.meta.env.VITE_Open_AI_Key
    const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const dispatch = useDispatch()

    const text = "Write 3 dishes in the format : name of the dish with number and the discription of each dishe based on these ingredients : Ingredients:  Fritos, Chili, Shredded cheddar cheese, Sweet white or red onions, diced small Sour cream"

    const generateRecipe1 = async () => {
        setLoading(true)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.86,
            max_tokens: 400,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
        // console.log(JSON.stringify(response.data.data))
        // console.log(result)
        setLoading(false)

        setResult(response.data.choices[0].text)

        // dispatch(setRecipes(response.data.choices[0].text));
        dispatch(setRecipe2(response.data.choices[0].text));
        // console.log(JSON.stringify(response.data.choices[0].text))
    };

    useEffect(() => {
        generateRecipe1()
    }, [])

    return (
        <div className="flex w-full justify-center items-center flex-col">
            {/* <h2>Generate an Recipe using Open AI API</h2> */}

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
                        {/* <p className="mb-8 text-gray-200">
                            {result}
                        </p> */}

                    </div>


                </>
            }



        </div>

    )
}

