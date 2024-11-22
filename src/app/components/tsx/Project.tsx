import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/project.css";
import { StaticImageData } from "next/image";
const campusimg = '/images/campus_connect.png'
const portfolioimg = '/images/portfolio.png'
const coderbaseimg = '/images/coderbasehub.png'
const cosdataimg = '/images/cosdata.png'

const Project: React.FC = () => {
  interface Project {
    projectName: string;
    imgLink: string;
    technologies: string[];
    siteLink: string;
    repoLink: string;
  }
  const project: Project[] = [
    {
      projectName: "Campus Connect",
      imgLink: campusimg,
      technologies: [
        "REACT.JS",
        "NODE.JS",
        "HTML",
        "CSS",
        "EXPRESS.JS",
        "Javascript",
        "MONGO.DB",
      ],
      siteLink: "https://campusconnect1.netlify.app/",
      repoLink: "https://github.com/prashantug21/CampusConnectClient",
    }, {
      projectName: "Portfolio",
      imgLink: portfolioimg,
      technologies: ["NEXT.JS", "HTML", "Tailwind.CSS", "Javascript", "CSS"],
      siteLink: "https://prashanty.vercel.app/",
      repoLink: "https://github.com/prashantug21/portfolio"
    }, {
      projectName: "CoderBase Hub",
      imgLink: coderbaseimg,
      technologies: ["NEXT.JS", "HTML", "Tailwind.CSS", "TypeScript", "CSS", "POSTGRESQL"],
      siteLink: "https://coder-base-hub.vercel.app/",
      repoLink: "https://github.com/prashantug21/CoderBase-Hub"
    }, {
      projectName: "Cosdata",
      imgLink: cosdataimg,
      technologies: ["NEXT.JS", "HTML", "Tailwind.CSS", "Javascript", "CSS"],
      siteLink: "https://www.cosdata.io/",
      repoLink: "#"
    }
  ];
  return (
    <div className=" mt-12">
      <div
        className=" rounded-full border-4 py-1 w-fit flex flex-row gap-4 justify-center px-4 heading"
        id="Project-heading"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z" />
        </svg>
        <span className="text-3xl">Projects</span>
      </div>
      <div className="flex flex-col gap-0 max-w-4xl m-auto" id="projCont">
        {project.map((project: Project, index: number) => (<ProjectCard key={index}{...project} />))}
      </div>
      <hr className=" mt-20" />
    </div>
  );
}
export default Project;
