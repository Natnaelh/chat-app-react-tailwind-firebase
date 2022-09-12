import React from "react";
import { auth } from "../firebase";

const style = {
  wrapper: `text-gray bg-gray-200 hover:bg-gray-500 font-bold hover:text-white rounded px-4 py-2 `,
};
function Logout() {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button className={style.wrapper} onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
