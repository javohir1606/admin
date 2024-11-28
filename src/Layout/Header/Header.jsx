import React, { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import { MenuIcon } from "../../assets/icon/menuIcon";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-[#fff] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      <div className="container p-3">
        <div className="pt-[18px] flex justify-between items-center">
          <div className="relative">
            <img src={logo} alt="Logo" />

            <div className="absolute top-[-20px] left-[75px] mb-5 w-[80px] h-[24px] bg-[rgba(42,67,212,0.1)] rounded-[50px] flex items-center justify-center">
              <Link
                to={"/product"}
                className="font-medium text-[12px] leading-[190%] text-[#2a43d4]"
              >
                We're hiring
              </Link> 
            </div>
          </div>

            <ul className="hidden md:flex hover:text-blue-500 gap-10">
              <li className="">
                <a
                  className=" hover:underline font-medium text-[18px] leading-[137%] lg:text-[23px] text-[#060e29] block py-2 md:hover:text-blue-500 lg:hover:text-blue-500 xl:hover:text-blue-500"
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="hover:underline font-medium text-[18px] leading-[137%] lg:text-[23px] text-[#060e29] block py-2 md:hover:text-blue-500 lg:hover:text-blue-500 xl:hover:text-blue-500"
                  href="#service"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:underline font-medium text-[18px] leading-[137%] lg:text-[23px] text-[#060e29] block py-2 md:hover:text-blue-500 lg:hover:text-blue-500 xl:hover:text-blue-500"
                  href="#service"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  className="hover:underline font-medium text-[18px] leading-[137%] lg:text-[23px] text-[#060e29] block py-2 md:hover:text-blue-500 lg:hover:text-blue-500  xl:hover:text-blue-500"
                  href="#service"
                >
                  Portfolio
                </a>
              </li>
            </ul>

            <ul className="hidden md:flex gap-[15px] items-center ">
              <li>
                <a
                  className="md:hidden lg:block font-medium text-[18px] leading-[137%] text-[#060e29] block py-2"
                  href="#service"
                >
                  +998-77-777-7777
                </a>
              </li>
              <li>
                <button className="w-[120px] h-[35px] lg:h-[45px] font-simebold text-[18px]  text-white bg-[#2a43d4] border-[2px] border-[#2a43d4] rounded-[7px] flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#2a43d4] hover:shadow-lg">
                  Free quote
                </button>
              </li>
            </ul>

          <div className="lg:hidden sm:hidden">
            <div onClick={toggleMenu}>
              <MenuIcon />
            </div>

            {isMenuOpen && (
              <div className="absolute top-[60px] justify-center left-[90px] w-[200px] bg-white shadow-md shadow-blue-200 rounded-lg p-4">
                <ul className="justify-items-center text-center items-center">
                  <li>
                    <a
                      className="font-medium text-[18px] leading-[137%] text-[#060e29] block py-2"
                      href="#service"
                    >
                      Service
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-medium text-[18px] leading-[137%] text-[#060e29] block py-2"
                      href="#blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-medium text-[18px] leading-[137%] text-[#060e29] block py-2"
                      href="#company"
                    >
                      Company
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-medium text-[18px] leading-[137%] text-[#060e29] block py-2"
                      href="#profile"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
