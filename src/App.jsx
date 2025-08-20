import React from "react";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Primarybtn from "./components/buttons/Primarybtn";
import Hero from "./components/sections/Hero";
import Share from "./components/sections/Share";

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  const heroabsimg = [
    "https://i.imgur.com/tRrWK92.png",
    "https://i.imgur.com/LQOxIQt.png",
    "https://i.imgur.com/3RikMJ1.png",
    "https://i.imgur.com/7spNOjQ.png",
    "https://i.imgur.com/pTqDYRV.png",
    "https://i.imgur.com/33Rr4Yu.png",
  ];
  return (
    <>
      <Header />
      <Hero/>
      <Share/>
    </>
  );
}

export default App;
