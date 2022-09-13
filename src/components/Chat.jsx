import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { db } from "../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
const style = {
  main: `relative flex flex-col p-4`,
};
function Chat() {
  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const scroll = useRef();
  return (
    <main className={style.main}>
      {/* Messages Component */}
      {messages &&
        messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}

      {/* Send Message component */}
      <span ref={scroll}> </span>
    </main>
  );
}

export default Chat;
