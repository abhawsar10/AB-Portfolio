import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline({theme}){

    return(
        <div className="flex flex-col md:flex-row justify-center my-10" id="timelinesh">
            <div className="w-full md:w-7/12 ">
                <Title>Timeline</Title>
                {timeline.map(item =>(
                    <TimelineItem
                        key = {item.title}
                        year = {item.year}
                        title = {item.title}
                        subtitle = {item.subtitle}
                        img = {item.img}
                        item_color = {item.item_color}
                        shadow_color = {item.shadow_color}
                        duration = {item.duration}
                        details = {item.details}
                        theme = {theme}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;