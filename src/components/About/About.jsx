import React, { useState, useEffect, useRef } from "react";
import menu from "../../assets/img/menu.png";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container mt-[60px]" ref={sectionRef}>
      <div className="sm:grid sm:grid-cols-2 items-center">
        <h2
          className={`mb-4 font-bold text-[26px] mx-auto ml-5 w-[300px] sm:w-[400px] text-[#2a43d4] sm:text-[34px] lg:w-[560px] lg:text-[37px] lg:font-bold transition-all duration-1000 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#060e29]">Some of our humble </span>
          recognitions
        </h2>
        <p
          className={`mb-4 font-normal mx-auto text-[18px] w-[300px] sm:text-[24px] sm:w-[400px] lg:text-[34px] lg:w-[560px] text-[#060e29] transition-all duration-1000 ease-in-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We don't like to brag about it, but these organizations recognize our
          work ethic and product delivery.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid gap-[60px] text-center sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {Array(9)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={`border-[2px] p-[15px] border-[rgba(59,76,175,0.86)] rounded-[12px] shadow-[7px_7px_9px_-3px_rgba(42,67,212,0.2)] bg-[#fff] w-[210px] h-[270px] transition-transform duration-500 transform hover:scale-105 hover:shadow-lg group`}
              >
                <img
                  src={menu}
                  alt={`Recognition ${index + 1}`}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="mt-10 text-center">
                  <h4 className="mb-[5px] font-medium text-[18px] ">
                    BBB:
                  </h4>
                  <p className="font-normal text-[18px] text-[#060e29]">
                    A+ Rating on BBB.org
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex mb-11 mt-10 justify-center">
        <button
          className="font-medium text-[20px] leading-[146%] text-[#2a43d4] border-[2px] border-[#2a43d4] rounded-[12px] w-[265px] h-[65px] bg-[#fff] relative overflow-hidden group"
          style={{ fontFamily: "var(--font-family)" }}
        >
          <span className="absolute inset-0 bg-[#2a43d4] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-[#fff]">
            View more awards
          </span>
        </button>
      </div>
    </div>
  );
};
