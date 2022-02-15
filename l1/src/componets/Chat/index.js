import "../../App.css";
import { MessageList } from "../MessageList";
import React, { useEffect, useState, useRef } from "react";
import { Form } from '../Form';
import { AUTHORS } from "../../utils/constants";
import { Navigate, useNavigate, useParams } from "react-router";
import { ChatList } from "../ChatList";

const chats = [{ id: "chat1" }];
const messages = {
  chat1: [],
};

export function Chat() {
  const params = useParams();
  const navigate = useNavigate();
  const { chatId } = params;

  const [messageList, setMessageList] = useState({
    chat1: [],
    chat2: [],
    chat3: [],
  });

  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messageList[chatId]?.[messageList[chatId]?.length - 1]?.author ===
      AUTHORS.ME
    ) {
      timeout = setTimeout(() => {
        sendMessage("Hello human!", AUTHORS.BOT);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div  className="App" >
        {/* <ChatList /> */}
      <header className="App-header">
        <div className="chats">
        </div>
        <div>
            <MessageList messages={messageList[chatId]} />
        </div>
        <div ref={messagesEnd} />
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}