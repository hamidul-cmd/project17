import React from "react";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Primarybtn from "./components/buttons/Primarybtn";

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-black-900">
        <div className="max-w-wrapper m-auto px-4 py-6 ll:text-center ll:pt-10 3xl:pt-[93px]">
          <div className="ll:flex flex-col items-center relative z-50">
            <h1 className="text-34 font-semibold leading-10 mb-7.5 text-[#171717] ll2:text-50 ll2:leading-16 ll:mb-6 3xl:text-84 3xl:leading-[89px] dark:text-white">Create, inspect, and apply synthetic surveillance broadly.</h1>
            <p className="text-base leading-6.6 text-[#5F5F5F] mb-10 ll:mb-5 3xl:text-xl">Start with a stunning homepage. Stay motivated without hurting your pocket.</p>
            <Primarybtn text="Start for free" path=" #" />
          </div>
          <div className="ll2:mt-[-150px] relative z-20 3xl:mt-[-225px]">
            <img src="https://i.imgur.com/6cYWSKt.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
