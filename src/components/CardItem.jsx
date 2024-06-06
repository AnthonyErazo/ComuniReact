import React from 'react';
import { quotes } from "../assets";
import { Link } from 'react-router-dom';

const CardItem = ({ grupo, isLoading }) => {
    return (
        <div className="flex z-[1] justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            {isLoading ? (
                <>
                    <div className="w-[42.6px] h-[27.6px] bg-dimWhite rounded-lg mb-10"></div>
                    <div className="font-poppins font-normal text-[18px] leading-[32.4px] mb-10">
                        <div className="skeleton bg-dimWhite h-6 w-full mb-2"></div>
                        <div className="skeleton bg-dimWhite h-6 w-full mb-2"></div>
                        <div className="skeleton bg-dimWhite h-6 w-full mb-2"></div>
                        <div className="skeleton bg-dimWhite h-6 w-full mb-2"></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[48px] h-[48px] bg-dimWhite rounded-full"></div>
                        <div className="flex flex-col ml-4">
                            <div className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                                <div className="skeleton bg-dimWhite h-8 w-40"></div>
                            </div>
                            <div className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                                <div className="skeleton bg-dimWhite h-6 w-40"></div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Link to={`/groups/${grupo.id}#groupDescription`}>
                    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
                    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 line-clamp-4">
                        {grupo.description}
                    </p>
                    <div className="flex flex-row">
                        <img src={grupo.img.ref} alt={grupo.img.name} className="w-[48px] h-[48px] rounded-full" />
                        <div className="flex flex-col ml-4">
                            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                                {grupo.name}
                            </h4>
                            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                                Ver mas
                            </p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default CardItem;
