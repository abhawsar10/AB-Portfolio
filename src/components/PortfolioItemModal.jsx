import React, {useState,useRef,useEffect} from "react";

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


function PortfolioItemModal({title,img_Url,stack, link,details,isExpanded,onClick}){

    const itemRef = useRef(null);

    const link_icon = (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="2" 
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

                        <div className="flex">
                            <img 
                                src ={img_Url} 
                                alt="portfolio_item_image" 
                                className="w-full h-56 object-cover px-6 pt-6"
                            />
                        </div>
                        <div className="w-full p-6">
                            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
                            <p className="flex flex-wrap gap-2 dark:text-white flex-row items-center justify-start text-xs md:text-sm">
                                {stack.map((item, index) => (
                                    <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                        {item}
                                    </span>
                                ))}
                            </p>

                            <div className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                                <ul className="list-disc mx-3 my-5 marker:text-stone-400 dark:marker:text-stone-600 text-justify">
                                    {details.map((bullet, index) => (
                                        <li key={index}>{bullet}<br/></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex">
                                <a href={link} target="_blank" className="flex-auto">
                                    <div className="flex justify-center items-center px-1 py-2 mt-4 mr-2 mb-0 rounded-md font-bold text-white 
                                        bg-gradient-to-r from-yellow-500 to-pink-500 
                                        transition-all duration-300 h-10
                                    ">
                                            {link_icon}
                                    </div>
                                </a>
                                <div className="flex justify-center items-center px-1 py-2 mt-4 mb-0  rounded-md cursor-pointer h-10 w-10
                                    text-white dark:text-black
                                    bg-pink-500 dark:bg-yellow-500" 
                                    onClick={handleClose}>
                                        <CancelOutlinedIcon/>
                                </div>
                            </div>    
                        </div>



                    </div>
                </Fade>
            </Modal>
        </>
    )
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
  };


export default PortfolioItemModal;