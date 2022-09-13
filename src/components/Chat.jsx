import React, { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Sendmessage from "./Sendmessage";

const style = {
  main: `flex flex-col p-[10px]`,
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
      <Sendmessage scroll={scroll} />
      <span ref={scroll}> </span>
    </main>
  );
}

export default Chat;
