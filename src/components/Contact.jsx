import React from "react";
import Title from "./Title";
function Contact(){

    return(
        <div className="flex flex-col mb-10 mx-auto" id="contactesh">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/f/c0c01361-6a95-4493-817b-880697384eeb"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Work With Me</Title>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none 
                        dark:border-stone-500
                        hover:border-pink-500 
                        dark:hover:border-yellow-500 
                        transition-all duration-300 ease-linear"
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none
                        dark:border-stone-500
                        hover:border-pink-500 
                        dark:hover:border-yellow-500 
                        transition-all duration-300 ease-linear"
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none
                        dark:border-stone-500   
                        hover:border-pink-500 
                        dark:hover:border-yellow-500 
                        transition-all duration-300 ease-linear"
                    />
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max test-base font-medium rounded-md 
                    text-white dark:text-black 
                    hover:text-black hover:dark:text-white 
                    transition-all duration-200 ease-linear
                    bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md ">
                        Send
                    </button>
                    

                </form>
            </div>

        </div>
    )
}

export default Contact;