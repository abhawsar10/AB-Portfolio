// ChatPopup.js
import React, { useState } from 'react';
import aboutAnkit from '../data/about';

const sendicon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='fill-white' viewBox="0 0 512 512">
        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
    </svg>
);

const loading = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='fill-white spin' viewBox="0 0 512 512">
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
    </svg>
);

const ChatPopup = ({ onClose }) => {

    const savedMessages = localStorage.getItem("chatMessages");
    const initialMessages = savedMessages ? JSON.parse(savedMessages) : [];

    const [messages, setMessages] = useState(initialMessages);
    const [currentMessage, setCurrentMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          handleSendMessage();
        }
    };


    const handleSendMessage = async () => {

        if (currentMessage.trim()) {

            setMessages([...messages, { text: currentMessage, sender: 'user' }]);

            setCurrentMessage("");
            setIsLoading(true);

            let botResponse = ""
            botResponse = await sendUserMessageToAPI(currentMessage, JSON.stringify(messages));         
            console.log(botResponse)

            const newMessages = [...messages, { text: currentMessage, sender: 'User' }, { text: botResponse, sender: 'AnkitBot' }];
            setMessages(newMessages);
            setIsLoading(false);

            localStorage.setItem("chatMessages", JSON.stringify(newMessages));

        }
    }
    
        const handleClearChat = () => {
            setMessages([]);
            localStorage.removeItem("chatMessages");
        }


  return (
    <>
        <div className="fixed top-32 p-2 m-2 rounded-tl-xl rounded-bl-xl rounded-br-xl  z-50 bg-violet-300 dark:bg-orange-300
             right-10 left-10 sm:right-24 sm:left-auto
             sm:w-1/2 md:max-w-md lg:max-w-sm"
        >
            <div className=' flex justify-end'>
                {/* <div className='fixed top-40 border-black border-2'>

                </div> */}
            </div>
            <div className=" p-1 h-96 overflow-y-auto  rounded-tl-xl rounded-bl-xl rounded-br-xl   bg-stone-200">
                <div className='text-center p-1'>
                    <button className="rounded-xl px-4 py-1 bg-blue-500 dark:bg-green-700 text-white text-xs" onClick={handleClearChat}>Clear Chat</button>
                </div>
                <div className=" text-left text-white rounded-bl-xl rounded-br-xl m-2 p-2 bg-violet-300 dark:bg-orange-300 rounded-tl-xl">
                    Hello! I am Ankit's Virtual Presence. I can answer any questions you may have about Ankit.
                </div>
                {messages.map((message, index) => (
                    <div 
                        key={index} 
                        className={`
                            text-left text-white rounded-bl-xl rounded-br-xl m-2 p-2 
                            ${message.sender === 'AnkitBot' ? 'bg-violet-300 dark:bg-orange-300' : 'bg-blue-500 dark:bg-green-700'}
                            ${message.sender === 'AnkitBot' ? 'rounded-tl-xl' : 'rounded-tr-xl'}
                        `}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="mt-2 flex">
                <input 
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={handleKeyPress} 
                    className="border p-2 flex-grow rounded-lg"
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage} className="ml-2 w-12 flex items-center justify-center p-2 flex-none bg-blue-500 dark:bg-green-700 text-white rounded-lg">    
                    <div id="normal-icon" className={isLoading ? 'hidden' : ''}>{sendicon}</div>
                    <div id="loading-icon" className={isLoading ? '' : 'hidden'}>{loading}</div>
                </button>
            </div>  
        </div>
     </>
  );
}


async function sendUserMessageToAPI(userMessage,prev_messages) {

    let prompt = "";

    prompt += "You are the virtual presence of a professional software engineer named Ankit Bhawsar \n";
    prompt += "You are present on his professional portfolio website \n";
    prompt += "The User will ask professional and personal questions about Ankit Bhawsar\n";
    prompt += "Answer the questions about Ankit as if you are him, based on the context and user query\n";

    prompt += "Context about Ankit:\n";


    prompt += aboutAnkit;

    prompt += prev_messages + "\n";
    prompt += "\n" + "user:" +userMessage;
    
    prompt += "Answer in 100 words\n";

    console.log("prompt===>\n",prev_messages)

    try {
        const response = await fetch('https://bhaws-chatbot-extension.uw.r.appspot.com/generateChatResponse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_msg: prompt })
        });

        if (response.ok) {
            const data = await response.json();
            return data.message;
        } else {
            console.error('Error sending message to API');
            return 'Error occurred while processing your request.';
        }
    } catch (error) {
        console.error('Error sending message to API', error);
        return 'Error occurred while processing your request.';
    }
}

export default ChatPopup;
