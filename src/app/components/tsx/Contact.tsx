"use client";
import Image from "next/image";
import "../css/contact.css";
import React, { ChangeEvent } from "react";
import linkedin from "../svg/linkedin.svg";
import github from "../svg/github.svg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

export default function Contact() {
  const override: CSSProperties = {
    position:'relative',
    top:'50%',
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  let [loading, setLoading] = useState(false);

  interface form {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  const [formData, setFormData] = useState<form>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  function validate(length: number, name: string, type: string) {
    if (length == 0) {
      const ele = document.querySelector(`${type}[name="${name}"]`);
      ele?.classList.add("border-red-500");
      return false;
    } else {
      const ele = document.querySelector(`${type}[name="${name}"]`);
      ele?.classList.remove("border-red-500");
      return true;
    }
  }
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    let c1 = validate(name.length, "name", "input");
    let c2 = validate(email.length, "email", "input");
    let c3 = validate(subject.length, "subject", "input");
    let c4 = validate(message.length, "message", "textarea");
    if (c1 && c2 && c3 && c4) {
      const emaildata = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      setLoading(true)
      const load = document.getElementById("loaderbg");
      if (load) {
        load.style.display = "block"; 
      }

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emaildata),
      });

      const data = await response.json();
      if (response.status == 200) {
        toast.success("Email has been received. I will contact you soon", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
      setLoading(false)
      if (load) {
        load.style.display = "none"; 
      }
    }
  };

  return (
    <div className="mt-10">
      <div
        className=" rounded-full border-4 py-1 w-fit flex flex-row gap-4 justify-center px-4 heading"
        id="contact-heading"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-10"
        >
          <path d="m561-539-42-42 119-119-118-117 42-42 118 117 119-119 42 42-119 119 119 119-42 42-119-119-119 119ZM80-520l200-360 200 360H80Zm201 400q-66 0-113-47t-47-113q0-67 47-113.5T281-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-99-400h196l-98-176-98 176Zm338 460v-320h320v320H520Zm60-60h200v-200H580v200ZM280-668Zm1 388Zm399 0Z" />
        </svg>
        <span className="text-3xl">Contact</span>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-center m-auto gap-10 my-8 max-w-6xl">
        <div className="flex flex-col gap-5">
          <div className="md:text-7xl text-3xl  max-w-lg">
            Let<span>&apos;</span>s Work<span className=" text-green-600"> Together</span>
          </div>
          <div className=" text-gray-400 max-w-sm">
            I would love to hear about your project and how I can help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </div>
        </div>
        <div className="w-full max-w-lg">
          <form className="flex flex-col gap-10 w-full">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="text-2xl"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="text-2xl"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="text-2xl"
                name="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange(e)}
                autoComplete="off"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="text-xl h-36"
                name="message"
                value={formData.message}
                onChange={(e) => handleInputChange(e)}
                autoComplete="off"
              ></textarea>
            </div>
            <div className="m-auto">
              {" "}
              <button
                className="bg-green-600 text-white w-fit px-3 py-2 rounded-full"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Send Message
              </button>
              <div className="fixed w-full h-full bg-slate-800 opacity-70 z-10 top-0 left-0" id="loaderbg">
                <HashLoader
                  color={"#12e168"}
                  loading={loading}
                  cssOverride={override}
                  size={100}
                  aria-label="Loading Spinner"
                  data-testid="HashLoader"
                />
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </form>
        </div>
      </div>
      <hr className="my-20" />
      <div className="flex justify-between mx-2 my-14 ">
        <div className="text-xl sm:text-5xl flex items-center">
          prashantyadav
        </div>
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
    </div>
  );
}
