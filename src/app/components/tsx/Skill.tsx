import React from "react";
import Image from "next/image";
import html from "../svg/html-5-svgrepo-com.svg";
import css from "../svg/css-3-svgrepo-com.svg";
import js from "../svg/javascript.svg";
import react from "../svg/react.svg";
import node from "../svg/node.svg";
import mongo from "../svg/mongodb.svg";
import bootstrap from "../svg/bootstrap.svg";
import express from "../svg/express-js-icon-12.svg";
import "../css/skill.css";

export default function Skill() {
  return (
    <div>
      <div
        className="  rounded-full border-4 py-1 w-fit flex flex-row gap-4 justify-center px-4 heading"
        id="skill-heading"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-10 "
        >
          <path d="m561-539-42-42 119-119-118-117 42-42 118 117 119-119 42 42-119 119 119 119-42 42-119-119-119 119ZM80-520l200-360 200 360H80Zm201 400q-66 0-113-47t-47-113q0-67 47-113.5T281-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-99-400h196l-98-176-98 176Zm338 460v-320h320v320H520Zm60-60h200v-200H580v200ZM280-668Zm1 388Zm399 0Z" />
        </svg>
        <span className="text-3xl">Skills</span>
      </div>
      <div className="flex-col align-middle justify-center">
        <div className="md:text-6xl text-3xl my-8">
          My <span className=" text-green-600">Advantages</span>
        </div>
        <div className="skill grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 justify-evenly place-items-center lg:mx-20 xl:mx-36">
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={html}
              alt="html"
              className="opacity-1 my-5 w-20 sm:w-40"
              width={23}
            />
            <div className="sm:text-3xl  mb-4 text-center">HTML</div>
          </div>
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={css}
              alt="css"
              className="opacity-1 my-5 w-20 sm:w-40"
              width={23}
            />
            <div className="sm:text-3xl mb-4 text-center">CSS</div>
          </div>
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={js}
              alt="javascript"
              className="opacity-1 my-5 w-20 sm:w-40"
              width={45}
            />
            <div className="sm:text-3xl mb-4 text-center">Javascript</div>
          </div>
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={bootstrap}
              alt="bootstrap"
              className="opacity-1 my-5 w-20 sm:w-40"
              width={23}
            />
            <div className="sm:text-3xl  mb-4 text-center">Bootstrap</div>
          </div>
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={node}
              alt="Node"
              className="opacity-1 my-5 w-20 sm:w-40"
            />
            <div className="sm:text-3xl mb-4 text-center">Node</div>
          </div>
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={react}
              alt="React"
              className="opacity-1 my-5 w-20 sm:w-40"
              width={23}
            />
            <div className="sm:text-3xl mb-4 text-center">React</div>
          </div>
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={mongo}
              alt="MongoDB"
              className="opacity-1 my-5 w-20 sm:w-40"
              width={23}
            />
            <div className="sm:text-3xl mb-4 text-center">MongoDB</div>
          </div>
          <div className="skill-item hover:scale-110 transition-transform w-32 sm:w-40 xl:w-52 flex-col gap-5 justify-evenly items-center flex sm:p-7 rounded-full">
            <Image
              src={express}
              alt="Express"
              className="opacity-1 my-5 w-20 sm:w-40"
              width={23}
            />
            <div className="sm:text-3xl mb-4 text-center">Express</div>
          </div>
        </div>
        <hr className=" mt-20" />
      </div>
    </div>
  );
}
