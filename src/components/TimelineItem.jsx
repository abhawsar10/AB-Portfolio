import React,{useState} from "react";


function TimelineItem({theme,year, title, subtitle,img,item_color,shadow_color, duration, details}){

    return(
        <div className="flex">
            <div className="flex-none px-4 py-1 ">
                <img className="h-20 w-20 rounded-md" src={img}/>
            </div>
            <div className="flex-1">
                <ol className="flex flex-col md:flex-row relative border-l border-stone-400 dark:border-stone-600">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-stone-400 dark:bg-stone-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-600"/>
                            
                            <div className="flex flex-col">
                                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                                    <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md ">
                                        {year}
                                    </span>
                                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                                        {title}
                                    </h3>
                                    <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                                        {duration}
                                    </div>
                                </div>
                                {/* <div className="inline-block w-fit px-2 py-1 my-2 font-bold rounded-md" style={{ color: item_color, background: shadow_color}}>
                                */}
                                <div className="inline-block w-fit px-2 py-1 my-2 font-semibold rounded-md" 
                                    style={{
                                        color:theme === 'dark' ? shadow_color : item_color, 
                                        background:theme === 'dark' ? item_color : shadow_color , 
                                    }}
                                >
                                        {subtitle}
                                </div>
                            </div>
                        <div className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                            <ul className="list-disc -ml-1 marker:text-stone-400 dark:marker:text-stone-600">
                                {details.map((bullet,index)=>(
                                        <li key={index}>{bullet}<br/></li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default TimelineItem;