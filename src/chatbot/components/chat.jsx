import React, { useState } from 'react';
import botResponse from './bot_response'

import './chat.css';

function Chat(props) {
    const [userInput, setUserInput] = useState('');

    function send() {
      setUserInput('')
      props.onSend(userInput)
      botResponse(userInput)
    } 
    
    function change(e) {
      setUserInput(e.target.value);
    }

    return <div className='chat'>
      <div className='chat-log'>
        {props.children}
      </div>
      <div className='chat-input'>
        <textarea
            rows={4}
            value={userInput}
            onChange={change}
        />
        <button className="chat-button"
            onClick={send}
            disabled={!userInput}
        >Enviar</button>
      </div>
    </div>;
}

Chat.defaultProps = {
  onSend: () => {}
}

export { Chat };
