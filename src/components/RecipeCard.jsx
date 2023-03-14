import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import recipe from '../images/recipeA.png'
import recipeA from '../images/recipeA.png'
import { setRecipeCard } from '../redux/recipeCard'
import EditRecipe from './alerts/EditRecipe'
import Swal from 'sweetalert';

export default function RecipeCard({ handleChangeL, listValue, onClickRC, lists, listName, image, title, description, onClick, Customize, db, id, getCookBoookData }) {


    let [isOpen2, setIsOpen2] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedDescription, setUpdatedDescription] = useState(description);

    function closeModal2(id) {
        setIsOpen2(false)
        updateRecipeTitle(id)
    }


    function close2() {
        setIsOpen2(false)
    }


    function openModal2() {
        setIsOpen2(true)

    }

    const deleteRecipe = async () => {
        try {
            const movieDoc = doc(db, "CookBook", id);
            await deleteDoc(movieDoc);
            getCookBoookData()
            Swal({
                icon: "success",
                title: "Recipe deleted successfully",
                showConfirmButton: false,
                timer: 3000,
                confirmButtonColor: '#f0481a',

            });
        } catch (error) {
            Swal({
                icon: "info",
                title: error.message,
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };

    const updateRecipeTitle = async (id) => {

        try {
            const movieDoc = doc(db, "CookBook", id);
            await updateDoc(movieDoc, { title: updatedTitle, listId: listValue, description: updatedDescription });
            getCookBoookData()
            Swal({
                icon: "success",
                title: "Recipe updated successfully",
                showConfirmButton: false,
                timer: 3000,
                confirmButtonColor: '#f0481a',

            });
        } catch (error) {
            Swal({
                icon: "info",
                title: error.message,
                showConfirmButton: false,
                timer: 2000,
            });
        }

        // getCookBoookData()
    };

    const dispatch = useDispatch()
    const viewDetails = () => {
        dispatch(setRecipeCard({
            title,
            description,
            image
        }))
    }

    return (
        <div

            className='flex 
        transition ease-in-out delay-100 pb-2   md:hover:translate-x-2
        '>

            <div className="rounded-xl h-auto   w-full flex space-x-4 flex-col md:flex-row bg-opacity-40 bg-white md:p-6 p-4 ">
                <div className='flex flex-[30%]  justify-center items-center'>
                    <img className="mb-3  rounded-xl w-full " width="100" height="100" src={image} alt="Icon 03" />
                </div>
                <div className='flex-[70%]'>
                    <div className="">
                        <div className=" text-gray-100  font-bold  text-md md:text-xl">{title}</div>
                        <div className="text-gray-100  overflow-y-hidden  mb-1 h-[120px]   md:mb-3">
                            <p className=''> {description}</p>
                        </div>
                    </div>
                    <div className="text-right flex  space-x-2">
                        <button
                            onClick={openModal2}
                            type="button"
                            className="inline-flex text-primary-600 justify-center rounded-md   border-2 border-primary-600  px-4 py-2 text-sm font-medium  focus-visible:ring-2 ">

                            Edit Recipe

                        </button>
                        <button
                            type="button"
                            className="inline-flex text-white justify-center rounded-md border border-transparent bg-orange-50 px-4 py-2 text-sm font-medium  hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >  Share
                            {/* <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span> */}
                        </button>
                        <button
                            onClick={() => {
                                viewDetails()
                                onClickRC()
                            }}
                            type="button"
                            className="inline-flex text-white justify-center rounded-md border border-transparent bg-[#2a93dd40] px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >  View Details
                            {/* <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span> */}
                        </button>
                    </div>
                </div>

            </div>
            <EditRecipe
                listName={listName}
                listValue={listValue}
                lists={lists}
                handleChangeL={handleChangeL}
                isOpen={isOpen2} deleteRecipe={deleteRecipe}

                name="updatedTitle"
                handleCHange={((e) => setUpdatedTitle(e.target.value))}
                value={updatedTitle}

                nameD="updatedDescription"
                handleCHangeD={((e) => setUpdatedDescription(e.target.value))}
                valueD={updatedDescription}

                close={close2} closeModal={() => closeModal2(id)}


            />

        </div>
    )
}
