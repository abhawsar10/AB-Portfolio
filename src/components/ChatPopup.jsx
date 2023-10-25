// ChatPopup.js
import React, { useState } from 'react';

const ChatPopup = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, sender: 'user' }]);
      setCurrentMessage("");
      // For demonstration, let's auto-reply after a user sends a message.
      setTimeout(() => {
        setMessages([...messages, { text: currentMessage, sender: 'user' }, { text: "Thanks for your message!", sender: 'bot' }]);
      }, 1000);
    }
  }

  return (
    //   <div className="fixed top-40 md:right-20 p-2 m-2 rounded-xl z-50 bg-stone-500">
    <div className="fixed top-40 md:right-20 p-2 m-2 w-11/12 sm:w-full md:w-auto mx-auto md:mx-0 rounded-xl z-50 bg-stone-500">

        <div className="border p-4 h-48 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`text-left ${message.sender === 'bot' ? 'text-gray-400' : 'text-black'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <input 
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            className="border p-2 flex-grow"
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="ml-2 p-2 bg-blue-500 text-white">Send</button>
        </div>
     </div>
  );
}

export default ChatPopup;
