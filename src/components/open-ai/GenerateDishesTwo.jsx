import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/message";
import { setRecipe1, setRecipe2, setRecipe3, } from "../../redux/recipes";
import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser'
import { setDish1 } from "../../redux/dishes";


export default function GenerateDishesTwo({ prompt }) {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [placeholder, setPlaceholder] = useState(
        "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
    );

    const { dish1 } = useSelector((state) => state.dish);

    // import.meta.env.VITE_Open_AI_Key
    const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const text = "Write 3 dishes in the format : name of the dish and the discription of each dishe based on these ingredients : Ingredients:  Fritos, Chili, Shredded cheddar cheese, Sweet white or red onions, diced small Sour cream"

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
        // console.log(JSON.stringify(response.data.data))
        // console.log(result)
        setLoading(false)
        // setResult(response.data.choices)
        dispatch(setDish1(response.data.choices[0].text));
    };

    useEffect(() => {
        generateRecipe()
    }, [])

    // const substrings = recipe1.split(/(?=\d-)/);

    return (
        <div className="flex w-full justify-center items-center flex-col">
            {/* <h2>Generate an Recipe using Open AI API</h2> */}

            {loading ?
                <>
                    <h2>Generating..Please Wait..</h2>
                </>
                :
                <>

                    <div onClick={() => navigate("/dishe-details")}
                        className='bg-white w-full cursor-pointer bg-opacity-20 my-2 transition duration-150  p-2 rounded-2xl'
                    >
                        <div className="">
                            <p className="mb-8 w-full text-gray-200 ">   {dish1}  </p>
                        </div>


                    </div>


                </>
            }



        </div>

    )
}

