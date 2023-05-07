import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'



export default function EditRecipe({ isOpen, closeModal, openModal, close, handleCHange, value, name, deleteRecipe,
    handleChangeL, listValue, lists, listName, nameD, valueD, handleCHangeD

}) {


    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl
                                 bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Edit Recipe
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col">

                                        <input className=' px-2 py-2 my-2 border border-gray-500 focus:border-orange-500' placeholder="Enter a title"
                                            value={value} onChange={handleCHange} name={name} />
                                        <textarea rows={4} className=' px-2 py-2 my-2' placeholder="Enter your description"
                                            value={valueD} onChange={handleCHangeD} name={nameD} />

                                        <p className='py-2 font-medium'>Add To List</p>
                                        <select
                                            name={listName}
                                            value={listValue}
                                            onChange={handleChangeL}
                                            className="form-select"
                                        >
                                            <option value="0" selected  >Please choose a list</option>
                                            {lists.map((itemValue, index) => {
                                                return (
                                                    <option key={index} value={itemValue.id}>
                                                        {itemValue.name}
                                                    </option>
                                                );
                                            })}

                                        </select>

                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex text-white justify-center rounded-md border border-transparent bg-orange-50 px-4 py-2 text-sm font-medium  hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex text-orange-700 justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  focus-visible:ring-2 "
                                            onClick={close}
                                        >
                                            Cancel
                                        </button>
                                        {/* <button
                                            type="button"
                                            className="inline-flex text-white justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium  hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => {
                                                deleteRecipe()
                                                close()
                                            }}
                                        >
                                            Delete
                                        </button> */}
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
