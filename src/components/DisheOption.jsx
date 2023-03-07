import React from 'react'

export default function DisheOption({ title, name, value, handleChange, placeholder, isDishePages }) {
    return (
        <div className='flex w-full md:my-2  my-1.5 md:space-x-2 md:space-y-0 space-y-2 md:flex-row px-4 flex-col md:justify-center md:items-center'>
            <div className={`py-2.5  flex-[25%]
             rounded-full  justify-center hover:animate-pulse text-white flex 
                            bg-gradient-to-r ${isDishePages ? "from-orange-100 to-orange-50  md:w-44 w-[60%]" : "from-teal-300 to-teal-500 md:w-44 w-[60%]"}`}>
                {title}
            </div>
            <div className='flex-[65%] '>
                <input name={name} value={value} type="text" placeholder={placeholder} onChange={handleChange}
                    className="rounded-full text-start text-gray-600 bg-slate-300 pl-3 w-full py-2.5"
                />
            </div>
        </div>
    )
}
