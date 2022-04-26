import { remove, set } from "@firebase/database";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getChatsRefById } from "../../services/firebase";
import { deleteChat } from "../../store/chats/actions";

export const DeleteButton = ({ id }) => {

  const handleDeleteChat = () => {
    remove(getChatsRefById(id));
  };

  return <div onClick={handleDeleteChat}>X</div>;
};