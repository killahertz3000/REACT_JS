import logo from './logo.svg';
import './App.css';
import { Message } from './componets/Message';
import { useEffect, useState } from "react";
import { Form } from './componets/Form';
import { AUTHORS } from './utils/constants';

function App() {
  const [messageList, setMessageList] = useState([

  ]);

  const handleAddMessage = (text) => {
    const newMessage = {
      text,
      author: AUTHORS.ME,
    }
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }

  useEffect(() => {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {messageList.map((message) => (
          <Message
            text={message.text}
            author={message.author}
          />
        ))}
        <Form onSubmit={handleAddMessage}/>
      </header>
    </div>
  );
}

export default App;
