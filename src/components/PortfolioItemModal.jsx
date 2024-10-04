import React, {useState,useRef,useEffect} from "react";

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


function PortfolioItemModal({title,img_Url,stack, link,link2,details,isExpanded,onClick}){

    const itemRef = useRef(null);

    const gh = (
        <svg
            height="1.5em" 
            viewBox="0 0 496 512"
            >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
    );

    const link_icon = (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            className="w-6 h-6 stroke-white dark:stroke-black hover:stroke-black hover:dark:stroke-white transition-all duration-200 ease-linear"
        >
        <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" 
        />
        </svg>

    );


    
    const [Modalopen, setModalopen] = React.useState(false);
    const handleOpen = () => setModalopen(true);
    const handleClose = () => setModalopen(false);


    return(
        <>
            <div
                onClick={handleOpen}
                className={`border-2 border-stone-600 dark:border-stone-500 rounded-md overflow-hidden transition-all cursor-pointer
                    ${isExpanded ? "col-span-2" : ""}
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
                </div>  
            </div>

            <Modal
                open={Modalopen}
                onClose={handleClose}
            >
                
                <Fade in={Modalopen}>
                        
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-white dark:bg-black
                    border-4 border-pink-500 dark:border-yellow-500 
                    rounded-md
                    w-10/12 md:w-3/4 lg:w-1/2
                    outline-none">

                        <div className="pt-6 px-6 flex">
                            <div>
                                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
                            </div>
                            <div className="flex ml-auto justify-center items-center py-2 mb-0  rounded-md cursor-pointer h-10 w-10
                                text-white dark:text-black
                                bg-pink-500 dark:bg-yellow-500" 
                                onClick={handleClose}>
                                    <CancelOutlinedIcon/>
                            </div>
                        </div>
                        <div className="pt-1 px-6">
                            <p className="flex flex-wrap gap-2 dark:text-white flex-row items-center justify-start text-xs md:text-sm">
                                {stack.map((item, index) => (
                                    <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                        {item}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <img 
                            src ={img_Url} 
                            alt="portfolio_item_image" 
                            className="w-full h-56 object-cover px-6 pt-6"
                        />
                        <div className="w-full p-6">
                            <div className=" text-base font-normal text-stone-500 dark:text-stone-400">
                                <ul className="list-disc mx-3 mb-5 marker:text-stone-400 dark:marker:text-stone-600 text-justify">
                                    {details.map((bullet, index) => (
                                        <li key={index}>{bullet}<br/></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                { link && <a href={link} target="_blank" className="flex-auto" rel="noreferrer">
                                    <div className="flex justify-center items-center px-1 py-2 mt-4  mb-0 rounded-md font-bold text-white 
                                        bg-gradient-to-r from-yellow-500 to-pink-500 
                                        transition-all duration-300 h-10
                                    ">
                                            {gh}
                                    </div>
                                </a>}
                                { link2 && <a href={link2} target="_blank" className="flex-auto" rel="noreferrer">
                                    <div className="flex justify-center items-center px-1 py-2 mt-4  mb-0 rounded-md font-bold text-white 
                                        bg-gradient-to-r from-yellow-500 to-blue-500 
                                        transition-all duration-300 h-10
                                    ">
                                            {link_icon}
                                    </div>
                                </a>}
                            </div>    
                        </div>



                    </div>
                </Fade>
            </Modal>
        </>
    )
}


export default PortfolioItemModal;