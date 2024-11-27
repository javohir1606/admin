import React from "react";

export const About = () => {
  return (

    <div className="container mt-[90px]">
      <div className="sm:grid sm:grid-cols-2 ">
        <h2 className="font-bold text-[34px] w-[500px] text-[#2a43d4]">
          <span className="text-[#060e29]">Some of our humble </span>
          recognitions
        </h2>
        <p className="font-normal text-[18px] w-[337px] sm:text-[24px] text-[#060e29] sm:w-[560px]">
          We don't like to brag about it, but these organizations recognize our
          work ethic and product delivery.
        </p>
      </div>
    </div>
  );
};
