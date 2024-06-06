import { useState, useEffect } from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <>
      <Image
        src="/images/avatar.jpg"
        alt="avatar"
        className={`mx-auto border rounded-full ${
          theme === "light" ? "border-black " : "border-white shadow-xl"
        }`}
        height={128}
        width={128}
        layout="intrinsic"
        quality={100}
        priority
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Serhii</span> Safonov
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        href="./assets/cv.jpg"
        download="Serhii Safonov Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.linkedin.com/in/sergey-safonov9/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/sergio_safonelli/?next=%2F">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/KaratSergio">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Kharkiv, Ukraine</span>
        </div>
        <p className="my-2">safonov.json@gmail.com</p>
        <p className="my-2">+38(099)028-51-31</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:safonov.json@gmail.com")}
      >
        Email me
      </button>
      <div className="flex justify-center">
        <button
          onClick={changeTheme}
          className="flex justify-center w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
        >
          <span className="ml-2">{theme === "light" ? "Dark" : "Light"}</span>
          {theme === "light" ? (
            <HiMoon className="w-6 h-6 ml-2" />
          ) : (
            <HiSun className="w-6 h-6 ml-2" />
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
