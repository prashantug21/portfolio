import React from "react";
import Image from "next/image";
import github from "../svg/github.svg";
import linkedin from "../svg/linkedin.svg";
import profile from "../images/profile-pic.png";
import "../css/intro.css";
import { link } from "fs";

export default function Intro() {
  return (
    <div className="min-h-full mb-20" id="introduction">
      <div className="flex justify-between m-2" id="header">
        <div className="relative top-8 text-xl">prashantyadav</div>
        <div className="flex flex-row">
          <a
            href="https://www.linkedin.com/in/prashant-yadav-55a19a22b/"
            target="_blank"
          >
            <Image
              src={linkedin}
              alt="linkedin"
              id="linkedin"
              className="relative z-10"
            />
          </a>
          <a
            href="https://github.com/prashantug21"
            className=""
            target="_blank"
          >
            <Image
              src={github}
              alt="github"
              id="github"
              className="relative z-10"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center gap-5" id="intro">
        <div className="relative text-8xl justify-center " id="greeting">
          Nice to meet <br />
          you! I am
          <br /> <span id="name">Prashant Yadav</span>
        </div>
        <div className="profile">
          <Image src={profile} alt="profile"  />
        </div>
      </div>
      <div className=" text-gray-200 text-xl" id="oneline">
        Highly organized and detail-oriented Undergraduate student.
      </div>
      <div className="contactButton w-max">
        <div>
          <a href="#contact-heading" className=" text-xl">
            CONTACT ME
          </a>
        </div>
      </div>
      <hr className="introend" />

      <div>
        <div className="oval fixed top-20 -z-10" />
        <div className="oval fixed top-36 -z-10" />
        <div className="oval fixed top-56 -z-10" />
        <div className="oval fixed top-72 -z-10" />
      </div>

      <div>
        <div className="circle rounded-full right-0 m-0 -z-10" />
      </div>
    </div>
  );
}
