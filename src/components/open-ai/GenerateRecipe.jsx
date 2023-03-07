import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/message";
import { setRecipe1, setRecipe2, setRecipe3, } from "../../redux/recipes";
import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser'



export default function GenerateRecipe({ prompt }) {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [placeholder, setPlaceholder] = useState(
        "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
    );

    const { recipe1 } = useSelector((state) => state.recipe);

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

                    <div onClick={() => navigate("/dishe-details")} className='bg-white w-full cursor-pointer bg-opacity-20 my-2 transition duration-150 hover:scale-105 p-2 rounded-2xl'>
                        <h4 className="h5 text-gray-200 mb-4 font-bold"></h4>
                        {/* <p className="mb-8 text-gray-200">
                            {result.length > 0 && recipes}
                        </p> */}
                        <p className="mb-8 w-full text-gray-200">
                            {recipe1}
                        </p>
                        {/* <div>
                            {substrings.map((substring, index) => {
                                const match = substring.match(/^(\d)-(.*)/);
                                if (match) {
                                    return (
                                        <p key={index}>
                                            <strong>{match[1]}</strong> - {match[2]}
                                        </p>
                                    );
                                } else {
                                    return <p key={index}>{substring}</p>;
                                }
                            })}
                        </div> */}

                    </div>


                </>
            }



        </div>

    )
}

