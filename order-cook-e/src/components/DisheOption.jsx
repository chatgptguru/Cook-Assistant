import React from 'react'

export default function DisheOption({ title, name, onCLick, placeholder, }) {
    return (
        <div className='flex w-full md:my-2  my-1.5 md:space-x-2 md:space-y-0 space-y-2 md:flex-row px-4 flex-col md:justify-center md:items-center'>
            <div className='py-2.5 md:ml-[5%] flex-[25%] rounded-full  justify-center hover:animate-pulse text-white flex 
                            bg-gradient-to-r from-orange-100 to-orange-50 w-44'>
                {title}
            </div>
            <div className='flex-[65%] md:mr-[5%]'>
                <input name={name} placeholder={placeholder} onClick={onCLick}
                    className="rounded-full text-start text-gray-600 bg-slate-300 pl-3 w-full py-2.5"
                />
            </div>
        </div>
    )
}
