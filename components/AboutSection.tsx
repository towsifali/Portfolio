import React from "react";
import ContentSection from "./ContentSection";
import Image from "next/image";

const skills = [
  { skill: "C/C++" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "PHP" },
  { skill: "Docker" },
  { skill: "Linux" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Node.Js" },
  { skill: "Tailwind CSS" },
  { skill: "React" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL" },
  { skill: "FastAPI" },
  { skill: "MongoDB" },
];

const educationData = [
  {
    title: "Education",
    content: [
      {
        heading: "BSc. Computer Science",
        subheading: "City University of Hong Kong",
        date: "2020 SEP     -     Present",
        info: [
          "CGPA: 3.54",
          "Finaly Year Project on Fall Detection using mmWave Radar data. Utilized Python for analysing, cleaning and generating feature and Implemented experiments using Python with Pandas, Scikit-learn and TensorFlow Libraries to run prediction models and mainly an Recurrent Neural Networks (RNN) Model.",
        ],
      },
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 md:pt-16 md:pb-16">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-6 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-16 justify-center align-top items-stretch md:flex-row md:text-left md:pd-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <ContentSection />
          </div>
          <div className="md:w-1/2">
            {educationData.map((texts, idx) => {
              return (
                <div key={idx}>
                  <h1 className="text-center text-3xl font-bold mb-2 space-y-16 md:text-left">
                    {texts.title}
                  </h1>
                  {texts.content.map((cnts, ids) => {
                    return (
                      <div key={ids} className="space-y-2">
                        <div className="flex flex-row justify-between">
                          <div className="text-xl text-left font-semibold">
                            {cnts.heading}
                          </div>
                          <div className="text-xl text-right italic">
                            {cnts.subheading}
                          </div>
                        </div>
                        <p className="text-base">{cnts.date}</p>
                        <div>
                          <ul className="list-disc pb-5 pl-4 space-y-2">
                            {cnts.info.map((txts, idz) => {
                              return <li key={idz}>{txts}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className="flex flex-wrap flex-column justify-center md:justify-start">
              <h1
                className="text-center text-3xl font-bold mb-2 md:text-left"
                style={{ width: "100%" }}
              >
                Technical Skills
              </h1>
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
