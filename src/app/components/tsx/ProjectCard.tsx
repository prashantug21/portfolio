"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
interface Project {
  projectName: string;
  imgLink: string;
  technologies: string[];
  siteLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<Project> = ({
  projectName,
  imgLink,
  technologies,
  siteLink,
  repoLink,
}) => {
  return (
    <div className="project p-3 md:p-8 rounded-3xl">
      <div className="flex flex-col rounded-xl shadow-lg shadow-gray-400 p-3 md:p-6 ">
        <div className="flex flex-col gap-3">
          <div className="relative text-center">
            <Image
              src={imgLink}
              alt="campus"
              className="opacity-100"
              id="project_image"
              width={850}
              height={400}
            />
            <div
              className="flex flex-row justify-center items-center gap-2"
              id="project_link"
            >
              <div className="text-xl font-semibold">
                <a href={repoLink} className="cursor-pointer" target="_blank">
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>
          <div className="text-2xl md:text-4xl font-bold hover:text-purple-700"><a href={siteLink} target="_blank">{projectName}</a></div>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="text-xl font-semibold">Technologies:</div>
            <div className="flex flex-row gap-2">
              <p className="leading-9">
                {technologies?.map((tech: string, index: number) => (
                  <span className=" text-xl font-medium cursor-default" id="techs" key={index}>
                    {tech + ` `}
                  </span>
                ))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
