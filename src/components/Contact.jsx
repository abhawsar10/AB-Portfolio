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
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max test-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">
                        Send
                    </button>
                    

                </form>
            </div>

        </div>
    )
}

export default Contact;