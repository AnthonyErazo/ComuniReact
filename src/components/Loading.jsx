import React from 'react'

function Loading() {
    return (
        <div className='bg-primary fixed flex items-center justify-center w-full h-full z-[999999]'>
            <div className="loader absolute">
            </div>
        </div>
    )
}

export default Loading
