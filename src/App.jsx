import React, { useState } from "react";
import logo from "./logo.svg";

//How to add i18n to new components?

//1. import this /////////
import "./i18n";
import { useTranslation } from "react-i18next";
//////////////////////////


import LenguageSelector from "./Components/LenguageSelector/LenguageSelector";


function App() {
  
  //2. create this const and add your components text and keys
  const { t, i18n } = useTranslation();
  const textList = {
    title: t("Welcome to React"),
    solution: t("Solution"),
    documentation: t("Documentation"),
    developer: t("Developer")
  }
  /////////////////

  /* E.g. jsx use:
  *
  * <p>{textList.title}</p>        
  * 
  */

  return (
    <div className="text-center selection:bg-green-900">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <style>
          {
            "\
            .animate-speed{\
              animation-duration:20s;\
            }\
          "
          }
        </style>
        
        <p className="mb-4 bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text p-3 text-5xl font-black text-transparent selection:bg-transparent">
          {textList.title}
        </p>

        <LenguageSelector />

        <img
          src={logo}
          className="animate-speed h-60 motion-safe:animate-spin"
          alt="logo"
        />

        <p>Vite + React + Tailwindcss + i18n</p>
        <p>{textList.solution}</p>
        <p>
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://github.com/DaianaArena/vite-tailwind-localization-template/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {textList.documentation}
          </a>
        </p>
        <p className="mt-4 flex gap-3 text-center text-[#8d96a7]">
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
          {" | "}
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://react.i18next.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            i18n Docs
          </a>
        </p>

        <p className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text  font-black text-transparent selection:bg-transparent">
          {textList.developer}
          <a
            className="text-[#61dafb] transition-all hover:text-blue-400"
            href="https://www.linkedin.com/in/arenadaiana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daiana Arena
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
