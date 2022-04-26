// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjcYFsMdc5fiDOIGA-mv8VnQKnP5gag08",
  authDomain: "gb2204-557ef.firebaseapp.com",
  projectId: "gb2204-557ef",
  storageBucket: "gb2204-557ef.appspot.com",
  messagingSenderId: "640057957428",
  appId: "1:640057957428:web:99e6508bbe04d89401fe61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);

export const db = getDatabase(app);
export const profileRef = ref(db, "profile");
export const getProfileNameRef = (userId) => ref(db, `profile/${userId}/name`);
export const profileShowNameRef = ref(db, "profile/showName");
export const chatsRef = ref(db, "chats");
export const getChatsRefById = (chatId) => ref(db, `chats/${chatId}`);

export const messagesRef = ref(db, "messages");
export const getMessageListRefByChatId = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
export const getMessageRefById = (chatId, msgId) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);