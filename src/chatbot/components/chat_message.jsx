import React from 'react'

function ChatMessage(props) {
    let className = 'chat-message';

    if (props.fromMe) {
        className += ' chat-message--from-me';
    } else {
        className += ' chat-message--from-her';
    }

    return <div className={className}>
      {props.children}
    </div>;
}

ChatMessage.defaultProps = {
    fromMe: false,
};

export default ChatMessage