import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-5/6 max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

function Sendmessage({ scroll }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid: uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        className={style.input}
        type="text"
        placeholder="Message"
        onChange={(event) => setInput(event.target.value)}
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
}

export default Sendmessage;
