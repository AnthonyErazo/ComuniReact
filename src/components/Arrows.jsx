const Arrows = ({ onClickPrev, onClickNext }) => {
    return (
        <div className='absolute bottom-0 right-0 left-0 z-[100] flex w-full justify-between'>
            <div className="absolute bottom-0 left-0">
                <button
                    onClick={onClickPrev}
                    className='bg-gray-200 fill-white font-mono w-10 sm:w-30 h-[100vh] flex items-center justify-center rounded-tl-lg rounded-bl-lg text-lg transition duration-500 hover:bg-arrow-left hover:fill-white translate-y-[30px] blur-[20px] opacity-0 animate-show-content'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='20'
                        height='20'
                        className='w-4 sm:w-6 h-6'
                    >
                        <path d='M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z' />
                    </svg>
                </button>
            </div>
            <div className="absolute bottom-0 right-0">
                <button
                    onClick={onClickNext}
                    className='bg-gray-200 fill-white font-mono w-10 sm:w-30 h-[100vh] flex items-center justify-center rounded-tr-lg rounded-br-lg text-lg transition duration-500 hover:bg-arrow-right hover:fill-white translate-y-[30px] blur-[20px] opacity-0 animate-show-content'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='20'
                        height='20'
                        className='w-4 sm:w-6'
                    >
                        <path d='M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Arrows;
