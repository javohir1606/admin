import React, { useState } from "react";
import { ImgIcon } from "../../assets/icon/imgIcon";
import img from "../../assets/img/img.png";
import img1 from "../../assets/img/img1.svg";
import { IconImg } from "../../assets/icon/iconImg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <div>
      <div className="container mx-auto">
        <style>
          {`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.9s ease-out;
          }

          @keyframes move-circle {
            0% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(50px, 50px);
            }
            100% {
              transform: translate(0, 0);
            }
          }

          .animate-move-circle {
            animation: move-circle 3s infinite;
          }

          /* Bounce animation */
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateX(-10px);
            }
          }

          .animate-bounce {
            animation: bounce 2s ease-in-out infinite;
          }
        `}
        </style>

        <div className="mt-[80px] mb-[130px] animate-fade-in">
          <div>
            <h1
              className="w-[320px] sm:w-[556px] lg:w-[800px] font-roboto mb-4 text-center mx-auto font-bold text-[31px] lg:text-[40px] leading-[135%] tracking-[-0.02em] text-[#060e29]"
              style={{ fontFamily: "var(--font-family)" }}
            >
              AI Driven Mobile App Development Company
            </h1>
            <p
              className="font-medium sm:w-[465px] w-[300px] text-center mx-auto text-[20px] leading-[130%] text-[#060e29]"
              style={{ fontFamily: "var(--font-family)" }}
            >
              Top rated according to Forbes, Clutch and BBB
            </p>
          </div>

          <div className=" mt-[80px] mb-[120px] mx-auto text-center flex justify-center items-center relative">
            <div onClick={toggleModal}>
              <ImgIcon />
            </div>
            <div className="relative xs:hidden sm:flex lg:flex">
              <div className="absolute rotateX-[-30px] left-[25px] top-[-60px] transform rotateX-[50deg] animate-bounce">
                <IconImg />
              </div>

              <div className="absolute left-[30px] top-[-30px]">
                <h4 className="px-[15px] w-[156px] h-[52px] font-normal text-[16px] leading-[161%] text-[#060e29] transform rotate-[-8deg]">
                  See what we do at Jafton.com
                </h4>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-4 rounded-lg">
                <img src={img} alt="img" className="w-[300px] h-auto" />
                <button
                  className="absolute top-[30px] right-[30px] bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={toggleModal}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>

        <ul
          ref={ref}
          className="sm:flex sm:gap-[30px] lg:gap-[150px] justify-center"
        >
          <li className="text-center mb-[30px]">
            <h2 className="font-bold text-[35px] text-[#060e29]">
              {inView && <CountUp end={10} duration={2} />}
            </h2>
            <p className="font-medium text-[20px] text-[#060e29]">
              years in business
            </p>
          </li>
          <li className="text-center mb-[30px]">
            <h2 className="font-bold text-[35px] text-[#060e29]">
              {inView && <CountUp end={120} duration={2} suffix="+" />}
            </h2>
            <p className="font-medium text-[20px] text-[#060e29]">
              rockstar app developers on staff
            </p>
          </li>
          <li className="text-center justify-center mb-[30px]">
            <div className="flex text-center justify-center items-center gap-2">
              <h2 className="font-bold text-[35px] text-[#5a41e1]">
                {inView && <CountUp end={4} duration={2} />}
              </h2>
              <img src={img1} alt="img" />
            </div>
            <p className="font-medium text-[20px] text-[#5a41e1]">unicorns</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
