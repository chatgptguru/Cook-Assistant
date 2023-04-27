import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'



export default function RecipeCardDetails({ isOpen, openModal, close, closeModal, recipeCardData }) {

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div"
                    className="relative bg-opacity-100  z-50"
                    onClose={closeModal}>


                    <div className="fixed top-28 inset-0 overflow-y-auto ">
                        <div className="flex  items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full   bg-[#2a93dd40] bg-opacity-60
                                 md:w-[70%] md:mx-[15%] 
                                 transform overflow-hidden rounded-2xl
                                 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-100"
                                    >
                                        {recipeCardData?.title || "Recipe Details"}
                                    </Dialog.Title>
                                    <div className="mt-2 ">
                                        <div className="flex flex-col">
                                            <div className='flex   justify-center items-center'>
                                                <img className="mb-3  rounded-xl h-56" src={recipeCardData?.image} alt="Icon 03" />
                                            </div>
                                            <div className="text-gray-100 mb-1 h-60 overflow-y-scroll  md:mb-3">
                                                <pre className=''> {recipeCardData?.description}</pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex text-primary-600 border-2 border-primary-600 justify-center rounded-md  px-4 py-2 text-sm font-medium  focus-visible:ring-2 "
                                            onClick={close}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
