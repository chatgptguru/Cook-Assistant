import { useEffect, useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { useDispatch } from "react-redux";
import { setImage } from "../../redux/image";
import { PropagateLoader } from 'react-spinners'

export default function GenerateImageRecipe({ prompt }) {
    // const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [placeholder, setPlaceholder] = useState(
        "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
    );
    const configuration = new Configuration({
        apiKey: "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",
    });

    const dispatch = useDispatch()

    const openai = new OpenAIApi(configuration);

    const generateImage = async () => {
        setPlaceholder(`Search ${prompt}..`);
        setLoading(true);
        const res = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "512x512",
        });
        setLoading(false);
        setResult(res.data.data[0].url);
        dispatch(setImage(res.data.data[0].url))
    };


    useEffect(() => {
        generateImage()
    }, [])

    return (
        <div className="app-main  flex flex-col justify-center items-center">
            {loading ? (
                <>
                    <PropagateLoader color="#ee6713" />
                </>
            ) : (
                <>
                    {result.length > 0 ? (
                        <img className="result-image rounded-lg" src={result} alt="result" />
                    ) : (
                        <></>
                    )}
                </>
            )}
        </div>
    );
}

