import React from "react";

const data = [
  {
    title: "Experience",
    content: [
      {
        heading: "Software Developer",
        subheading: "Mpplication Group Limited",
        date: "2024 FEB    -      PRESENT",
        info: [
          
          "Led a major UI modernization for the flagship iConference platform, shipping a cleaner, more accessible front end that improved user satisfaction and reduced support queries on legacy workflows",

"Built a feature-packed clinic booking system from scratch for an insurance company client, handling service creation, booking, timeslot management, conditional sub-questions, and integrations; streamlined operations and enhanced client satisfaction",

"Enhanced platform features and functionalities using JavaScript libraries, PHP for data manipulation, and MySQL for database operations, ensuring seamless performance and adaptability to specific client needs while maintaining performance and data integrity",

"Provided front-office client support, including requirements gathering, training sessions, and timely resolution of concerns, fostering strong customer relationships and efficient delivery of solutions",
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
          "Developed a full-stack tracking web application using React.js for responsive frontend interfaces and Node.js for backend API integrations, ensuring smooth data flow and cross-device compatibility.",
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
