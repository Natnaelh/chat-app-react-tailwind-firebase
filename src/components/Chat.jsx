import React, { useEffect, useState, useRef } from "react";

const style = {
  main: `relative flex flex-col p-4`,
};
function Chat() {
  const scroll = useRef();
  return (
    <main className={style.main}>
      {/* Messages Component */}

      {/* Send Message component */}

      <span ref={scroll}> </span>
    </main>
  );
}

export default Chat;
