import React from 'react'

function PaginationNumber({ totalPages, page, setPage }) {
    const hanldePagePlus = () => {
        if (totalPages > page) {
            setPage(page + 1)
        }
    }
    const hanldePageMinus = () => {
        if (1 < page) {
            setPage(page - 1)
        }
    }

    if (totalPages > 1) return (
        <div className={`flex  px-4 py-3 justify-center`}>
            <div className="flex items-center justify-center text-white">
                <div className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button onClick={() => hanldePageMinus()} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) =>
                        <button onClick={() => setPage(index + 1)} key={index} className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${page == (index + 1) ? 'bg-black-gradient-2' : 'ring-1 ring-inset'}`}>{index + 1}</button>
                    )}
                    <button onClick={() => hanldePagePlus()} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
    return <></>
}

export default PaginationNumber

