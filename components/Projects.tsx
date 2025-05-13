"use client";
import { IconLink } from "@tabler/icons-react";
import React, { useState } from "react";

interface project {
  name: string;
  github: string;
  paragraph: string;
}

const Projects = () => {
  const [active, setActive] = useState<"seriousProjects" | "funProjects">(
    "seriousProjects"
  );
  const projects: Record<string, project[]> = {
    seriousProjects: [
      {
        name: "Retail Product Placement System",
        github:
          "https://github.com/RakshitKharb/retail-product-placement",
        paragraph:
          "This computer vision-driven system optimizes shelf product arrangements to boost sales and customer experience. It integrates Generative AI for synthetic shelf image generation, YOLO for object detection, a Market Basket Analysis-based Recommender System, and an interactive Streamlit dashboard for actionable insights. Built with YOLO, Pandas, NumPy, Scikit-learn, and Streamlit.",
      },
      {
        name: "Credit Fraud Detection Using AWS",
        github: "https://github.com/RakshitKharb/Anomaly-Detection-on-Cloud",
        paragraph:
          "A scalable fraud detection pipeline leveraging AWS for real-time transaction analysis. It uses AWS S3 for storage, SageMaker Canvas for model building, and a serverless architecture with Lambda and API Gateway. CI/CD is automated with CodePipeline, CodeBuild, and CodeDeploy. Technologies used include Python and various AWS services.",
      },
      {
        name: "Air Quality Prediction Using Multi-Output LSTM Models",
        github: "https://github.com/RakshitKharb/air_quality_project",
        paragraph:
          "A deep learning model using Multi-Output LSTM to forecast pollutant levels (PM2.5, PM10, NO, SO) with real-time data from the OpenAQ API. The model is enhanced with time-series features, lag variables, and interaction terms. Dynamic city selection makes it applicable across regions. Built with Python, Keras, Pandas, NumPy, and Scikit-learn.",
      },
    ],

    funProjects: [
      {
        name: "Arjuna's Ally",
        github: "https://chatgpt.com/g/g-679be8e531188191a76053140e99edb6-arjuna-s-ally",
        paragraph:
          "Arjuna's Ally is a GPT-based app that delivers straight-up Bhagavad Gita wisdom—no fluff, just pure shlokas with accurate references. It helps users seek clarity, purpose, or timeless advice through concise verse delivery.",
      },
      {
        name: "Highway-Car Game",
        github: "https://codepen.io/Rakshit-Kharb/full/WbNypvq",
        paragraph:
          "A simple arcade-style car game built in under 30 minutes. Players must dodge incoming cars to survive as long as possible. It’s a fun, fast-paced game showcasing quick development and game logic implementation.",
      },
      {
        name: "Apply-Help",
        github: "https://drive.google.com/file/d/1HfN51CnjkH40QzfYwz2-mbAr6OkxzE_5/view",
        paragraph:
          "Apply-Help is an AI-driven browser automation tool that handles tasks like job application form filling using LLMs such as DeepSeek AI and ChatGPT via LangChain. It connects AI agents to browsers for streamlined web automation.",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12" id="projects">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 relative inline-block ">
        <span
          className=" bg-gradient-to-b from-violet-600 via-violet-600 to-gray-900 text-transparent bg-clip-text
"
        >
          Projects
        </span>
      </h2>

      <div className="flex justify-center rounded-xl mb-10">
        <div className="inline-flex p-1 bg-gray-900/50 rounded-xl">
          {(["seriousProjects", "funProjects"] as const).map((name) => (
            <button
              key={name}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === name
                  ? "bg-purple-500 text-white shadow-lg rounded-xl shadow-blue-500/20"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActive(name)}
            >
              {name === "seriousProjects" ? "Mega Projects" : "Mini Projects"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-full md:h-100">
      {projects[active].map((project) => (
        <div key={project.name} >
          <a
            href={project.github}
            target="_blank"
            className="block max-w-sm p-6 bg-purple-200 border border-gray-200 rounded-lg shadow-sm hover:bg-purple-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name} <span className="inline-block"><IconLink/></span>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {project.paragraph}
            </p>
          </a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
