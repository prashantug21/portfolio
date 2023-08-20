"use client";
import React, { useState } from "react";
import "../css/floatbar.css";

const Floatbar = () => {
  return (
    <div
      className="flex-row  justif rounded-full m-2 border-2 border-grey-500 py-5 item-center justify-center"
      id="floatbar"
    >
      <a href="#introduction">
        <div className="flex justify-center mx-1 md:mx-2 my-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
          </svg>
        </div>
      </a>
      <a href="#skill-heading">
        <div className="flex justify-center mx-1 md:mx-2 my-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m561-539-42-42 119-119-118-117 42-42 118 117 119-119 42 42-119 119 119 119-42 42-119-119-119 119ZM80-520l200-360 200 360H80Zm201 400q-66 0-113-47t-47-113q0-67 47-113.5T281-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-99-400h196l-98-176-98 176Zm338 460v-320h320v320H520Zm60-60h200v-200H580v200ZM280-668Zm1 388Zm399 0Z" />
          </svg>
        </div>
      </a>
      <a href="#Project-heading">
        <div className="flex justify-center mx-1 md:mx-2 my-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z" />
          </svg>
        </div>
      </a>
      <a href="#contact-heading">
        <div className="flex justify-center mx-1 md:mx-2 my-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Floatbar;
