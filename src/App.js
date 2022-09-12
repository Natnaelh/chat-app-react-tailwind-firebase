import React from "react";
import Navbar from "./components/Navbar";

console.log(process.env.API_KEY);

const style = {
  appContainer: `max-w-[728px] mx-auto `,
  sectionContainer: `flex flex-col text-center h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  return (
    <div clasName={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />

        {/* Chat component */}
      </section>
    </div>
  );
}

export default App;
