import React, { useState } from 'react'
import { Chat } from './components/chat.jsx';
import ChatMessage from './components/chat_message'

const Chatbot = () => { 
    const [messages, setMessages] = useState([])

    function onSend(userInput) {
      const msg = {from: 'me', text: userInput}
      setMessages(messages.concat([msg]))
    }

    return <Chat onSend={onSend}>
      {messages.map((m, ni) => <ChatMessage
        key={ni}
        fromMe={m.from === 'me'}
        children={m.text}
        />)}
    </Chat>;
  }

  export default Chatbot