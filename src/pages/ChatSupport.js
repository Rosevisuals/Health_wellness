import React from 'react';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    color: #1a73e8;
  }

  .chat-box {
    width: 100%;
    max-width: 600px;
    height: 400px;
    border: 1px solid #1a73e8;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    padding: 10px;
    background-color: #ffffff;
  }

  .chat-input {
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    display: flex;
  }

  .chat-input input {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    outline: none;
  }

  .chat-input button {
    width: 20%;
    padding: 10px;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #1a73e8;
    color: #ffffff;
    cursor: pointer;
  }

  .chat-input button:hover {
    background-color: #0c53b7;
  }
`;

const ChatSupport = () => {
  return (
    <ChatWrapper>
      <h2>24/7 Chat Support with Wellness Coaches</h2>
      <div className="chat-box">
        {/* Chat messages would go here */}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </ChatWrapper>
  );
};

export default ChatSupport;
