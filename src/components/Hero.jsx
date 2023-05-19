import React from "react";
import hero from "../assets/hero1.png";

const Hero = () => {
  return (
    <div
      className="border border-white sm:rounded-[64px] rounded-[40px] "
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-5 w-[900px] sm:p-16 p-6">
        <h1 className="font-extrabold sm:text-[95px] text-[50px] text-white">
          &#123; JSON &#125; <br></br>
          Placeholder
        </h1>
        <h1 className="font-normal sm:text-[33px] text-[16px]  text-white sm:w-[800px] w-[250px]">
          Free fake API for testing and prototyping. Powered by JSON Server +
          LowDB. Tested with XV.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
