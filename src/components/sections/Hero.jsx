import React from "react";
import Primarybtn from "../buttons/Primarybtn";

function Hero() {
  return (
    <>
      <section className="bg-white dark:bg-black-900">
        <div className="max-w-wrapper m-auto px-4 py-6 ll:text-center ll:pt-10 3xl:pt-[93px]">
          <div className="ll:flex flex-col items-center relative z-50">
            <h1 className="text-34 font-semibold leading-10 mb-7.5 text-[#171717] ll2:text-50 ll2:leading-16 ll:mb-6 3xl:text-84 3xl:leading-[89px] dark:text-white">
              Create, inspect, and apply synthetic surveillance broadly.
            </h1>
            <p className="text-base leading-6.6 text-[#5F5F5F] mb-10 ll:mb-5 3xl:text-xl">
              Start with a stunning homepage. Stay motivated without hurting
              your pocket.
            </p>
            <Primarybtn text="Start for free" path=" #" />
          </div>
          <div className="ll2:mt-[-150px] relative z-20 3xl:mt-[-225px]">
            <img src="https://i.imgur.com/6cYWSKt.png" alt="" />
            <img
              src="https://i.imgur.com/tRrWK92.png"
              alt="heroabs"
              className="absolute top-1/2 left-[10%] hidden ll:block hero-bounce"
            />
            <img
              src="https://i.imgur.com/LQOxIQt.png"
              alt="heroabs"
              className="absolute top-[70%] left-[20%] hidden ll:block hero-bounce"
            />
            <img
              src="https://i.imgur.com/3RikMJ1.png"
              alt="heroabs"
              className="absolute top-[40%] left-[30%] hidden ll:block hero-bounce"
            />
            <img
              src="https://i.imgur.com/7spNOjQ.png"
              alt="heroabs"
              className="absolute top-[40%] right-[30%] hidden ll:block hero-bounce"
            />
            <img
              src="https://i.imgur.com/pTqDYRV.png"
              alt="heroabs"
              className="absolute top-[70%] right-[20%] hidden ll:block hero-bounce"
            />
            <img
              src="https://i.imgur.com/pTqDYRV.png"
              alt="heroabs"
              className="absolute top-1/2 right-[10%] hidden ll:block hero-bounce"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
