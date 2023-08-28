import React from "react";
import ContentSection from "./ContentSection";
import Image from "next/image";

const skills = [
  { skill: "C/C++" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "GoLang" },
  { skill: "Docker" },
  { skill: "Linux" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Node.Js" },
  { skill: "Tailwind CSS" },
  { skill: "React" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Kubernetes" },
  { skill: "MySQL" },
  { skill: "FastAPI" },
  { skill: "MongoDB" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-16">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-6 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-16 justify-center align-top items-stretch md:flex-row md:text-left md:pd-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <ContentSection />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-3xl font-bold mb-2 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mt-2 mr-2 text-gray-800 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div className="mt-2 items-center">
              <Image
                className="rounded shadow-2xl"
                src="/skyline.jpg"
                alt="HK Skyline"
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
