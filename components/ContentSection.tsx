import React from "react";
import { Content } from "../utils/read_json";

type ContentSectionProps = {
  title: string;
  items: Content[];
};

const ContentSection = () => {
  return (
    <div>
        <div className="flex flex-row justify-between">
            <div className="text-xl text-left font-semibold">Software Dev Intern</div>
            <div className="text-xl text-right italic">Hospital Authority</div>
        </div>
        <p className="text-base">2022 JUL - Present</p>
        <div>
            <ul className="list-disc">
                <li>Developed a full-stack web application for handling private cloud usage and user information databases and using FastAPI, MySQL, and React.Js</li>
                <li>Automated their weekly CPU and Memory usage report preparation using Python which helped them to identify bottlenecks in their private cloud</li>
                <li>Ad-hoc Deployments of Microservices using Docker and Kubernetes</li>
                <li>Used Kibana to visualize their private cloud traffic data</li>
            </ul>
        </div>
    </div>
  );
};

export default ContentSection;