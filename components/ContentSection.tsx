import React from "react";
import { Content } from "../utils/read_json";

type ContentSectionProps = {
  title: string;
  items: Content[];
};

const ContentSection = () => {
  return (
    <div>
        <div className="flex-row">
            <p className="text-xl text-left font-semibold">Software Dev Intern</p>
            <p className="text-lg text-right italic">Hospital Authority</p>
        </div>
        <p className="text-lg">2022 JUL - Present</p>
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