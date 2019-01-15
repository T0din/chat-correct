import React from 'react';
import './style.scss';

const Messages = () => (
    <div id="messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
);

const Message = () => (
    <div className="message">
        <img src="https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg" alt="" className="image"/>
        <div className="info">
            <p className="autor">
                Tony
            </p>
            <p className="message-text">
                Hello there !
            </p>
        </div>
        
    </div>
);

export default Messages;