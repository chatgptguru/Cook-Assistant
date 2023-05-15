import React, { useEffect, useState } from 'react'
import bigTitle from '../images/bigTitle.png'
import justAsk from '../images/justAsk.png'
import recipe from '../images/recipe.png'
import appStore from '../images/appStore.png'
import playStore from '../images/playStore.png'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import CookBookk from "../images/PersonalCookbook.png"
import RecipeCard from './RecipeCard'
import homeImageBackground from "../images/homeBackground.png"
import { addDoc, collection, doc, setDoc, getDocs, query, where, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth, firestoredDB } from "../config/firebase";
import { useDispatch, useSelector } from 'react-redux'
import { setRecipes } from '../redux/search'
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import Swal from 'sweetalert';
// import { db, auth, firestoredDB } from "../../config/firebase";
import CustomModal from './alerts/CustomModal'
import EditRecipe from './alerts/EditRecipe'
import RecipeCardDetails from './alerts/RecipeCardDetails'
import EditListModal from './alerts/EditListModal'
export default function CookBook() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [cookBookData, setCookBookData] = useState([])
    const [listsData, setListsData] = useState([])
    const [search, setSearch] = useState("");
    const [clickedListId, setCLickedListId] = useState(null)

    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    const dispatch = useDispatch()
    //Get Lists data
    const listCollectionRef = collection(firestoredDB, "Lists");
    // auth?.currentUser?.uid
    const getLists = async () => {
        setLoading(true)
        try {
            const data = await getDocs(listCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            const userData = filteredData.filter((item) => item.userId === auth?.currentUser?.uid)
            setListsData(userData)

        } catch (err) {
            console.error(err);
        }
        setLoading(false)
    };

    useEffect(() => {
        getLists()
    }, [])
    useEffect(() => {
        getLists()
    }, [clickedListId])

    //Get Cookbook data
    const cookbookCollectionRef = collection(firestoredDB, "CookBook");
    // auth?.currentUser?.uid
    const getCookBookList = async () => {
        setLoading(true)
        try {
            const data = await getDocs(cookbookCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            // console.log("Hooooooo " + JSON.stringify(filteredData))
            // filteredData.map((item) => {
            //     console.log(item)
            // })
            const userData = clickedListId === null ? filteredData.filter((item) => item.userId === auth?.currentUser?.uid) : filteredData.filter((item) => item.userId === auth?.currentUser?.uid && item.listId === clickedListId)
            // console.log("erer :" + JSON.stringify(userData))
            setCookBookData(userData)
            dispatch(setRecipes(userData))

        } catch (err) {
            console.error(err);
        }
        setLoading(false)
    };

    useEffect(() => {
        getCookBookList()
    }, [])
    useEffect(() => {
        getCookBookList()
    }, [clickedListId])


    const { recipes } = useSelector((state) => state.search)

    useEffect(() => {
        const searchedItem = recipes?.filter((cook) => cook?.description?.includes(search))
        setCookBookData(searchedItem)
    }, [search]);


    const [newList, setNewList] = useState("")
    const handleChange2 = (e) => {
        setNewList(e.target.value);
    };

    const listsCollectionRef = collection(firestoredDB, "Lists");

    const onSubmitList = async () => {
        try {
            if (!newList) {
                alert("Please enter a valid value")
            } else {
                await addDoc(listsCollectionRef, {
                    userId: auth?.currentUser?.uid,
                    name: newList
                });
                getCookBookList()
                getLists()
                Swal({
                    icon: "success",
                    title: "List added successfully",
                    showConfirmButton: false,
                    timer: 2000,
                    confirmButtonColor: '#f0481a',

                });

            }

        } catch (err) {
            // console.error(err);
            console.log(err.message);

            Swal({
                icon: "info",
                title: err.message,
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };

    let [isOpen, setIsOpen] = useState(false)
    let [isOpenR, setIsOpenR] = useState(false)

    function closeModal() {
        onSubmitList()
        setIsOpen(false)
    }

    function close() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    function closeModalR() {
        setIsOpenR(false)
    }

    function closeR() {
        setIsOpenR(false)
    }

    function openModalR() {
        setIsOpenR(true)
    }


    const [listId, setList] = useState("")
    const handleChange3 = (e) => {
        setList(e.target.value);
    };

    const { recipeCard } = useSelector((state) => state.recipeCard)


    let [deleteR, setDeleting] = useState(false)
    const deleteList = async (id) => {
        setDeleting(true)
        try {
            const movieDoc = doc(firestoredDB, "Lists", id);
            await deleteDoc(movieDoc);
            getLists()
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
        setDeleting(false)
    }


    //Edit modal
    const updateListName = async () => {
        try {
            const movieDoc = doc(firestoredDB, "Lists", clickedListId);
            await updateDoc(movieDoc, { name: newListName });
            getLists()
            Swal({
                icon: "success",
                title: "List renamed successfully",
                showConfirmButton: false,
                timer: 5000,
                confirmButtonColor: '#f0481a',

            });
        } catch (error) {
            Swal({
                icon: "info",
                title: error.message,
                showConfirmButton: false,
                timer: 6000,
            });
        }

        // getCookBoookData()
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    function closeEditListModalAndSubmit() {
        // onSubmitEditListName()
        updateListName()
        setIsEditModalOpen(false)
    }

    function closeEditListModal() {
        setIsEditModalOpen(false)
    }

    function openEditListModal() {
        setIsEditModalOpen(true)
    }

    const [newListName, setNewListName] = useState("")
    const handleChangeEditListName = (e) => {
        setNewListName(e.target.value);
    };

    return (
        <section className="relative  min-h-screen  ">
            <div className=" mx-0 px-4 sm:px-6 ">
                <div className="pt-32 pb-10 md:pt-40 md:pb-16">
                    <div className="max-w-5xl mx-auto">
                        {/* Background image */}
                        <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
                            <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                            {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-700 dark:from-gray-900" aria-hidden="true"></div> */}
                        </div>

                        {/* Background image */}
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

                            className={`flex justify-center items-center py-4 px-1  
                            ${isOpenR ? "" : "bg-gradient-to-r from-[#66BFFF40] to-[#66BFFF3E]"} shadow-lg
                             rounded-xl bg-opacity-50
                        w-full flex-col  `}>


                            {
                                isOpenR ? <></> :
                                    <> <div className='py-3 px-1'>
                                        <img src={CookBookk} className='' height={120} width={400} />
                                    </div>

                                        {/* Search block */}
                                        <div className=" w-full lg:w-8/12  ">
                                            <div className="flex justify-center  md:mt-6">
                                                <input value={search} name='search' onChange={handleChange} type="tel" className=" w-full h-full  pl-4 rounded-l-full  py-3" placeholder="Search what you want..." aria-label="Phone number" />
                                                <button className="text-white bg-gradient-to-r from-orange-100 to-orange-50
                          shrink-0 rounded-r-full px-6 text-center">Search</button>
                                            </div>
                                            {/* Success message */}
                                        </div>
                                        <div className="md:w-[90%] md:mx-[5%] flex w-full md:flex-row
                 flex-col pt-4 justify-start items-start space-x-0 space-y-3
                  md:space-y-0 md:space-x-2    ">
                                            {/* Left Side */}
                                            <div className='flex-[30%]  flex-wrap h-auto w-full lg:h-128 lg:overflow-y-scroll justify-start items-start  flex-row md:space-x-0 space-x-2 bg-white bg-opacity-30 rounded-xl'>
                                                <div className='flex md:flex-col md:overflow-x-hidden overflow-x-scroll items-center justify-center'>
                                                    <button
                                                        onClick={openModal}
                                                        className="rounded-full lg:w-52 w-full
bg-gradient-to-r from-orange-100 to-orange-50  md:mx-0 
font-medium  flex items-center justify-center border border-transparent lg:px-14 py-2.5
 my-2  text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                                                    >
                                                        Create List
                                                    </button>
                                                    <button onClick={() => setCLickedListId(null)}
                                                        className={`lg:w-52 w-full md:p
                                                md:mx-0 bg-clip-padding  ${clickedListId === null ? "bg-primary-600" : "bg-opacity-25 bg-white"} 
                                             font-medium  flex items-center justify-center border border-transparent lg:px-14 py-2.5
                                              my-2 rounded-full text-gray-800  transition duration-150 ease-in-out`}>
                                                        General
                                                    </button>
                                                    {
                                                        loading ? <p>Please wait ...</p> :
                                                            listsData.length === 0 ? <p className='text-white text-center text-xl'>Not Lists</p> :
                                                                <>

                                                                    {listsData.map((list, idx) => {
                                                                        return <div
                                                                            key={idx}
                                                                            className={`lg:w-52 w-full
                                                                          md:mx-0 bg-clip-padding ${clickedListId === list.id
                                                                                    ? "bg-primary-600"
                                                                                    : "bg-opacity-25 bg-white"
                                                                                } 
                                                                          font-medium   flex items-start justify-between cursor-pointer hover:bg-gray-200 border border-transparent lg:px-4 py-2.5
                                                                          my-2 rounded-full text-gray-800  transition duration-150 ease-in-out `}
                                                                            onClick={() => setCLickedListId(list.id)}
                                                                        >
                                                                            <div className=''>{list.name} </div>
                                                                            <div className="flex mt-1 space-x-1">
                                                                                <div onClick={() => deleteList(list.id)}>
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        class="icon icon-tabler icon-tabler-trash"
                                                                                        width="16"
                                                                                        height="16"
                                                                                        viewBox="0 0 24 24"
                                                                                        stroke-width="1.5"
                                                                                        stroke="#ff1e00"
                                                                                        fill="none"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                    >
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <line x1="4" y1="7" x2="20" y2="7" />
                                                                                        <line x1="10" y1="11" x2="10" y2="17" />
                                                                                        <line x1="14" y1="11" x2="14" y2="17" />
                                                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                                                    </svg>
                                                                                </div>
                                                                                <div
                                                                                    onClick={() => setIsEditModalOpen(true)}
                                                                                >
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fa6a10" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                                                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                                                        <path d="M16 5l3 3" />
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    })}

                                                                </>
                                                    }
                                                </div>
                                            </div>
                                            {/* Right Side */}
                                            <div className='flex-[70%] lg:h-128 lg:overflow-y-scroll overflow-x-hidden px-4 py-4 '>
                                                {
                                                    cookBookData.length === 0 ?
                                                        <p className='text-white text-center text-xl'>Your Cookbook is Empty</p> :
                                                        <>
                                                            {cookBookData.map((recipe, idx) => {
                                                                return <RecipeCard
                                                                    onClickRC={openModalR}
                                                                    key={idx} image={recipe.imageUrl}
                                                                    db={firestoredDB}
                                                                    id={recipe.id}
                                                                    title={recipe.title}
                                                                    description={recipe.description}
                                                                    lists={listsData}
                                                                    getCookBoookData={getCookBookList}
                                                                    handleChangeL={handleChange3}
                                                                    listName={listId}
                                                                    listValue={listId}

                                                                />
                                                            })}
                                                        </>
                                                }
                                                {loading &&
                                                    <p className='text-white text-center text-xl'>Loading data... Please wait</p>}
                                            </div>
                                        </div></>

                            }

                        </motion.div>

                        <CustomModal isOpen={isOpen} close={close} openModal={openModal} newList={newList}
                            handleChange={handleChange2} closeModal={closeModal} />
                        <EditListModal isOpen={isEditModalOpen} close={closeEditListModal} openModal={openEditListModal} newList={newListName}
                            handleChange={handleChangeEditListName} closeModal={closeEditListModalAndSubmit} />

                        <RecipeCardDetails isOpen={isOpenR} close={closeR} openModal={openModalR}
                            recipeCardData={recipeCard} closeModal={closeModalR} />

                        {/* <EditRecipe isOpen={isOpen2} close={close2} closeModal={closeModal2} /> */}

                    </div>
                </div>
            </div>
        </section>

    )
}
