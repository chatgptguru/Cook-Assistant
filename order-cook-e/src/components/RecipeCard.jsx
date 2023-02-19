import React from 'react'
import recipe from '../images/recipeA.png'
import recipeA from '../images/recipeA.png'

export default function RecipeCard() {
    return (
        <div className='flex 
        transition ease-in-out delay-100 pb-2 hover:scale-105  md:hover:translate-x-3
        '>

            <div className="rounded-xl h-auto flex space-x-4  bg-opacity-40 bg-white p-6 ">
                <img className="mb-3" src={recipeA} width="200" height="100" alt="Icon 03" />
                <div><div className="grow">
                    <div className="font-hkgrotesk font-bold text-xl">Animation</div>
                    <div className="text-black mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </div>
                </div>
                    <div className="text-right">
                        <a className="font-medium text-orange-500 inline-flex items-center transition duration-150 ease-in-out group" href="#0">
                            Learn More{' '}
                            <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                        </a>
                    </div></div>

            </div>

        </div>
    )
}
