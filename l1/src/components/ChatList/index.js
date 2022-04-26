import { onChildAdded, onChildRemoved, onValue, set } from "@firebase/database";
import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  chatsRef,
  getChatsRefById,
  getMessageRefById,
  getMessagesRefByChatId,
} from "../../services/firebase";

import { addChat, initChatsTracking } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { FormMui } from "../FormMui";
import { ChatItem } from "./ChatItem";

export const ChatList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleAddChat = (newChatName) => {
    const newId = `chat-${Date.now()}`;
    set(getChatsRefById(newId), { id: newId, name: newChatName });
    set(getMessagesRefByChatId(newId), { empty: true });
  };

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

  return (
    <>
      <List>
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </List>
      <FormMui onSubmit={handleAddChat} />
      <Outlet />
    </>
  );
};