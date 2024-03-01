import React from "react";

const data = [
  {
    title: "Experience",
    content: [
      {
        heading: "Web Programmer",
        subheading: "Mpplication Group Limited",
        date: "2024 FEB    -      PRESENT",
        info: [
          "Enhanced features and functionalities on the flagship iConference platform by developing custom JavaScript functions tailored to client specifications",
          "Managed MySQL database operations using SQL commands and custom PHP objects and methods specific to the clients requests",
          "Engineered a dynamic platform page, seamlessly integrating JavaScript functions, PHP-based data manipulation, and HTML elements",
          "Successfully navigated within an extensive file system containing thousands of lines of code to implement necessary enhancements and functionalities",
        ],
      },
    ],
  },
  {
    title: "",
    content: [
      {
        heading: "Software Developer",
        subheading: "BIT APP Limited",
        date: "2023 JUL    -      2023 SEP",
        info: [
          "Worked on a full-stack tracking web application using React.js for the front end and Node.js for the backend",
          "Worked on the front-end development, including designing and implementing user interfaces and ensuring the application’s responsiveness across devices and the backend to integrate APIs and ensure smooth data flow",
        ],
      },
    ],
  },
  {
    title: "",
    content: [
      {
        heading: "Placement Programmer",
        subheading: "Hospital Authority",
        date: "2022 JUL    -      2023 JUL",
        info: [
          "Developed a full-stack web application for handling private cloud usage and user information databases and using FastAPI, MySQL, and React.Js",
          "Automated their weekly CPU and Memory usage report preparation using Python which helped them to identify bottlenecks in their private cloud",
          "Ad-hoc Deployments of Microservices using Docker and Kubernetes",
          "Used Kibana to visualize their private cloud traffic data",
        ],
      },
    ],
  },
];

const ContentSection = () => {
  return (
    <div>
      {data.map((texts, idx) => {
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
                    <ul className="list-disc pb-2 pl-4 space-y-1">
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
    </div>
  );
};

export default ContentSection;
