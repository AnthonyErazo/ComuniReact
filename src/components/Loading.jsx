import React from 'react'

function Loading({ dashboard }) {
    return (

        dashboard ? (
            <div className='bg-boxdark-2 absolute flex items-center justify-center w-full h-full z-[999999]' >
                <div className="loader absolute">
                </div>
            </div>) :
            (<div className='bg-primary fixed flex items-center justify-center w-full h-full z-[999999]'>
                <div className="loader absolute">
                </div>
            </div>)

    )
}

export default Loading
