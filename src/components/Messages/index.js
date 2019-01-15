import React from 'react';
import './style.scss';

const Messages = ({ messages }) => (
    <div id="messages">
        { messages.map(message => <Message key={message.message} {...message}/>) }
    </div>
);

const Message = ({ autor, message }) => (
    <div className="message">
        <img src="https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg" alt="" className="image"/>
        <div className="info">
            <p className="autor">
                { autor }
            </p>
            <p className="message-text">
                { message }
            </p>
        </div>
        
    </div>
);

export default Messages;