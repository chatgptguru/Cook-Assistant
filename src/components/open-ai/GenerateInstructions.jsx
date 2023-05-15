import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/message";
import { setRecipe1, setRecipe2, setRecipe3, setRecipes } from "../../redux/recipes";
import { useNavigate } from "react-router-dom";
import { setInstructions } from "../../redux/instructions";
import { PropagateLoader } from 'react-spinners'


export default function GenerateInstructions({ prompt }) {

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const { recipe1 } = useSelector((state) => state.recipe);
    const { instructions } = useSelector((state) => state.instructions);

    // import.meta.env.VITE_Open_AI_Key
    const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const generateRecipe = async () => {
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

        setLoading(false)
        dispatch(setInstructions(response.data.choices[0].text))
        setResult(response.data.choices[0].text)
        console.log("Ingredients and instructions : " + JSON.stringify(response.data.choices[0].text))
    };

    useEffect(() => {
        generateRecipe()
    }, [])


    return (
        <div className="flex w-full justify-center items-center flex-col">
            {/* <h2>Generate an Recipe using Open AI API</h2> */}

            {loading ?
                <div className="my-6">
                    <PropagateLoader color="#ee6713" />
                </div>
                :
                <>

                    <div className="w-full">  <pre className="mb-8 text-gray-200 ">
                        {instructions}
                    </pre>
                    </div>

                </>
            }




        </div>

    )
}




function reformatString(str) {
    // Split the string into an array of substrings
    const substrings = str.split(' ');

    // Map over each substring to identify the number at the beginning
    const formattedSubstrings = substrings.map((substring) => {
        const firstChar = substring.charAt(0);
        const isNumber = !isNaN(parseInt(firstChar));

        // Apply formatting based on the number at the beginning of the substring
        if (isNumber) {
            const number = parseInt(firstChar);

            if (number === 1) {
                return <span className="number-one">{substring}</span>;
            } else if (number === 2) {
                return <span className="number-two">{substring}</span>;
            } else {
                return substring;
            }
        } else {
            return substring;
        }
    });

    // Join the formatted substrings back into a string
    const formattedString = formattedSubstrings.join(' ');

    return formattedString;
}



