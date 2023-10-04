import React, {useState,useRef,useEffect} from "react";

import "../styles/portfolio.css"

function PortfolioItem({title,img_Url,stack, link,details,isExpanded,onClick}){

    const itemRef = useRef(null);

    const link_icon = (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            className="w-full h-full stroke-white dark:stroke-black hover:stroke-black hover:dark:stroke-white transition-all duration-200 ease-linear"
        >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" 
        />
        </svg>

    );

    return(

        <div
            onClick={onClick}
            className={`border-2 border-stone-600 dark:border-stone-500 rounded-md overflow-hidden transition-all
                ${isExpanded ? "col-span-2" : ""}
                ${isExpanded ? "cursor-zoom-out" : "cursor-zoom-in"}
              hover:border-pink-500 
              dark:hover:border-yellow-500 
              cursor-pointer
              transition-all duration-200 ease-linear`}
        >
            <img 
                src ={img_Url} 
                alt="portfolio_item_image" 
                className="w-full h-36 md:h-48 object-cover"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 dark:text-white flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map((item, index) => (
                        <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
                {isExpanded && (
                    <>
                        
                        <div className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                            <ul className="list-disc mx-3 my-5 marker:text-stone-400 dark:marker:text-stone-600 text-justify">
                                {details.map((bullet, index) => (
                                    <li key={index}>{bullet}<br/></li>
                                ))}
                            </ul>
                        </div>
                            <a href={link} target="_blank">
                                <div className="flex justify-center items-center w-full px-1 py-2 mt-4 mb-0 rounded-md font-bold text-white 
                                    bg-gradient-to-r from-yellow-500 to-pink-500 
                                    transition-all duration-300 h-10
                                 ">
                                    {link_icon}
                                </div>
                            </a>
                    </>
                )}
            </div>  
        </div>
    )
}

export default PortfolioItem;