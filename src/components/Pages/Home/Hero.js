import React from "react";
import { banner } from "../../../assets";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:px-[100px]">
      <div className="hero-content flex flex-col lg:flex-row-reverse md:flex-row-reverse justify-between w-full">
        <img src={banner} className="md:w-1/2 rounded-lg" alt="" />
        <div className="md:w-1/2">
          <h3 className="text-primary text-3xl">Analyzent____</h3>
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
            Play Quiz Test Your <br />
            <span className="text-primary">General Knowledge</span>
          </h1>
          <p className="py-6">
            This is a quiz game website developed for learning purposes only.
            Here you can play quizzes on various topics.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
