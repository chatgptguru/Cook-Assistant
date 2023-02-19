import React from 'react'

export default function Dishe({ title, description }) {
    return (
        <div className='flex flex-col space-y-2'>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}
