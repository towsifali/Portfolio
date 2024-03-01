"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { BiArrowToBottom, BiEnvelope, BiCodeAlt, BiCode } from "react-icons/bi";

export default function HeroSection() {
  const DownloadResume = () => {
    var anchor = document.createElement("a");
    anchor.href =
      "https://drive.google.com/file/d/16uKl0jUHDpfTYhtCzOnpgTBn-ULkfvq8/view?usp=sharing";
    anchor.target = "_blank";
    anchor.download = "TOWSIF_RESUME";
    anchor.click();
  };
  const MailToMe = () => {
    var anchor = document.createElement("a");
    anchor.href = "mailto:qtali2-c@my.cityu.edu.hk";
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <section id="home">
      <div
        className="flex flex-col text-center items-center justify-center 
        animate-fadeIn animation-delay-2 mt-10 pt-14 sm:pt-12 md:pt-28 md:flex-row 
        md:space-x-4 md:text-left"
      >
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.jpg"
            alt="Picture"
            width={325}
            height={325}
          />
        </div>
        <div className="md:mt-2 text-center">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Towsif Ali
          </h1>
          <p className="text-xs my-4 md:text-xl whitespace-pre">HK BD</p>
          <p className="text-lg md:text-2xl">
            Developer👨🏽‍💻| Football⚽| Videogames🎮
          </p>
        </div>
      </div>
      <div>
        <p className="text-lg mt-4 mb-6 md:text-2xl">
          Hi, I'm Towsif! I'm a Computer Science Student based in Hong Kong. My
          main interests are Tech 📺, Software Development🛠 and DevOps☁️. I'm
          currently working as a Web Programmer @Mpplication Ltd
        </p>
      </div>
      <div className="text-center flex flex-row justify-evenly space-x-2 md:space-x-40 pb-20">
        <Link
          to="projects"
          className="flex flex-row button text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <BiCodeAlt size={25} className="mr-0.5" />
          My Projects
        </Link>
        <button
          className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          onClick={DownloadResume}
        >
          <p className="flex flex-row">
            <BiArrowToBottom size={25} className="mr-0.5" />
            My Resume
          </p>
        </button>
        <button
          className="button text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          onClick={MailToMe}
        >
          <p className="flex flex-row">
            <BiEnvelope size={25} className="mr-0.5" />
            Email Me
          </p>
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="activate"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
