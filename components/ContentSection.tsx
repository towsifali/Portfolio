import React from "react";

const data = [
  {
    "title": "Experience",
    "content":[
      {
        "heading": "Software Developer Intern",
        "subheading": "Hospital Authority",
        "date": "2022 JUL    -      Present",
        "info": [
          "Developed a full-stack web application for handling private cloud usage and user information databases and using FastAPI, MySQL, and React.Js",
          "Automated their weekly CPU and Memory usage report preparation using Python which helped them to identify bottlenecks in their private cloud",
          "Ad-hoc Deployments of Microservices using Docker and Kubernetes",
          "Used Kibana to visualize their private cloud traffic data"
        ]
      }]
  },
  {
    "title": "Education",
    "content": [
      {
        "heading": "BSc. Computer Science",
        "subheading": "City University of Hong Kong",
        "date": "2020 SEP     -     Present",
        "info": [
          "CGPA: 3.58",
          "Finaly Year Project on Fall Detection using mmWave Radar data from household devices such as wifi routers. Utilized Python and MATLAB for analysing, cleaning and generating feature and Implemented experiments using Python with Pandas, Scikit-learn and TensorFlow Libraries to run prediction models."
      ]
      }
    ]
  },
]

const ContentSection = () => {
  return (
    <div>
      {data.map((texts,idx) =>{
        return (
        <div key={idx}>
          <h1 className='text-center text-3xl font-bold mb-2 space-y-16 md:text-left'>
                {texts.title}
          </h1>
          {texts.content.map((cnts,ids)=> {
            return(<div key={ids} className="space-y-2">
              <div className="flex flex-row justify-between">
                  <div className="text-xl text-left font-semibold">{cnts.heading}</div>
                  <div className="text-xl text-right italic">{cnts.subheading}</div>
              </div>
              <p className="text-base">{cnts.date}</p>
              <div>
                  <ul className="list-disc pb-5 space-y-2">
                     {cnts.info.map((txts,idz)=>{
                      return(
                        <li key={idz}>{txts}</li>
                      )
                     })}
                  </ul>
              </div>
            </div>)
          })}
        </div>
        )
      })}
    </div>
  );
};

export default ContentSection;