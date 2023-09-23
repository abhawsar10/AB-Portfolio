import React,{useState,useEffect,useRef} from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./Portfolioitem";
import "../styles/portfolio.css"
import Title from "./Title";

function Portfolio(){
    
    const [expandedItem, setExpandedItem] = useState(null);
    
    const toggleExpanded = (index) => {
        if (expandedItem === index) {
            setExpandedItem(null);
        } else {
            setExpandedItem(index);
            console.log(expandedItem)
        }
    };  
    
    return(
        <>
        <div className="flex flex-col  mb-4 md:flex-row item-center ">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ml-52 flex-container" >
                
            </div>
            <Title>Projects</Title>
        </div>
        <div className="flex flex-col md:flex-row item-center justify-center mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 flex-container" >
                {portfolio.map((project,index) => (
                    <PortfolioItem
                        key={project.title}
                        img_Url={project.img_Url}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        details={project.details}
                        isExpanded={expandedItem === index}
                        onClick={() => toggleExpanded(index)}
                    />
                ))}
            </div>
        </div></>
        
    )
}

export default Portfolio;