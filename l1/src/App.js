import logo from './logo.svg';
import './App.css';
import { Message } from './componets/Message';
import { useEffect, useState, useRef } from "react";
import { Form } from './componets/Form';
import { AUTHORS } from './utils/constants';

const chats = [
  { name: "Chat1", id: "1" },
  { name: "Chat2", id: "2" },
];

function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMessage = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  // const handleAddMessage = (text) => {
  //   const newMessage = {
  //     text,
  //     author: AUTHORS.ME,
  //     id: `msg-${Date.now()}`,
  //   }
  //   setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  // }

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
        timeout = setTimeout(() => {
          const newMessage = {
            text: "Hello, human!",
            author: AUTHORS.BOT,
          };
          setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
      }, 2000);
    };

    return () => {
      clearTimeout(timeout);
    };
  }, [messageList]);

  return (
    <div  className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="chats">
          <ul>
            {chats.map((chat) => (
            <li key={chat.id}>{chat.name}</li>
            ))}
          </ul>
        </div>
        <div key={handleAddMessage.id}>
          {messageList.map((message) => (
            <Message
              text={message.text}
              author={message.author}
            />
          ))}
        </div >
        <div ref={messagesEnd} />
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;
