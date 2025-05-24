import React from 'react'

export default function Loader() {
    return (
        <div className='h-screen flex justify-center items-center '>
            <p className='animate-spin rounded-full border-t-4 border-purple-500 border-solid h-10 w-10'></p>
        </div>
    )
}
