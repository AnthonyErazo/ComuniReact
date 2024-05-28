

const SliderItem = ({ itemActive, id, image, brand, name, desc }) => {

    return (
        <li
            className={`absolute bg-white inset-0 overflow-hidden transition-all duration-500 ${itemActive == id ? 'opacity-100 z-10' : 'opacity-0'}`}
        >
            <div className='relative w-full h-full'>
                <img src={image} alt='Image' className='object-cover w-full h-full' />
                <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-t from-transparent to-primary" />
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-primary to-transparent" />
            </div>
            <div className='space-y-4 absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10'>
                <p
                    className={`uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0 animation-delay-300 ${itemActive === id && 'animate-show-content'}`}
                >
                    {brand}
                </p>
                <h2
                    className={`text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-0 animation-delay-400 ${itemActive === id && 'animate-show-content'}`}
                >
                    {name}
                </h2>
                <p
                    className={`text-white translate-y-[30px] blur-[20px] opacity-0 animation-delay-500 ${itemActive === id && 'animate-show-content'}`}
                >
                    {desc}
                </p>
            </div>
            <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-t from-transparent to-primary" />
            <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-primary to-transparent" />
        </li>
    );
};

export default SliderItem;
