import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";

import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/message";
import { setRecipe1, setRecipe2, setRecipe3, setRecipes } from "../../redux/recipes";
import { useNavigate } from "react-router-dom";
import { setInstructions } from "../../redux/instructions";

//   const text = '2-Tomatoes 3-Garlic 4-Instructions: Bake in the oven Garlic Baked Chicken with Tomatoes Ingredients: -1 whole chicken -2 tomatoes, sliced -4 cloves of garlic, minced -1 teaspoon of olive oil -Salt and pepper to taste Instructions: 1. Preheat the oven to 375°F. 2. Place the chicken in a baking dish. 3. Drizzle the olive';

//   const formattedText = formatText(text);
//   console.log(formattedText);


export default function GenerateInstructions({ prompt }) {


    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [placeholder, setPlaceholder] = useState(
        "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
    );



    const { recipe1 } = useSelector((state) => state.recipe);
    const { instructions } = useSelector((state) => state.instructions);

    // import.meta.env.VITE_Open_AI_Key
    const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const text = "Write 3 dishes in the format : name of the dish with number and the description of each dish based on these ingredients : Ingredients:  Fritos, Chili, Shredded cheddar cheese, Sweet white or red onions, diced small Sour cream"

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
        dispatch(setInstructions(response.data.choices[0].text))
        setResult(response.data.choices[0].text)
        // console.log(JSON.stringify(response.data.choices[0].text))
    };

    useEffect(() => {
        generateRecipe()
    }, [])

    const substrings = instructions && instructions.split(/(?=\d-)/);

    return (
        <div className="flex w-full justify-center items-center flex-col">
            {/* <h2>Generate an Recipe using Open AI API</h2> */}

            {loading ?
                <>
                    <h2>Generating..Please Wait..</h2>
                </>
                :
                <>

                    <pre className="mb-8 text-gray-200 ">
                        {instructions}
                    </pre>
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



