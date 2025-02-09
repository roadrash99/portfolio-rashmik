import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";

export const ABOUT_TEXT = `I am a dedicated full-stack developer with a strong foundation in building scalable and efficient web applications. With experience in front-end technologies like React and Angular, and back-end technologies including Node.js, Express, and databases like MongoDB, MySQL, and PostgreSQL, I aim to create innovative solutions that enhance user experience and drive business growth. Outside of work, I enjoy playing and watching cricket and football, traveling to new countries, working out, and reading self-help books to continuously improve myself.`;

export const EXPERIENCES = [

  {
    year: "Jan 2025 - May 2025",
    role: "Software Development Engineer Intern",
    company: "Re.Use.Full",
    description: `Spearheaded the transition from a GO and Vue.js site to a modern, interactive front end using React, integrated
                  with a C# backend, and explored serverless architecture via AWS Lambda.Streamlined the deployment pipeline by implementing CI/CD practices, reducing deployment time and increasing
                  overall development efficiency.`,
    technologies: ["React","C#","AWS"],
  },
  {
    year: "July 2022 - Apr 2023",
    role: "Software Development Engineer - 1 ",
    company: "Jio Platforms",
    description: `Diagnosed and rectified post-development issues in the Jio AutoBazaar feature using Angular, Sass, and
                  TypeScript, optimizing resource allocation and reducing downtime.
                  Transformed the JioHumsafar feature, leading to a significant increase in user engagement, while mentoring
                  team members through code reviews to improve code quality.
                  Delivered Production Support by diagnosing issues, troubleshooting, and enhancing system processes for
                  operational efficiency.`,
    technologies: ["HTML", "Sass", "Angular", "Typescript"],
  },
  {
    year: "Jan 2022 - June 2022",
    role: "Software Development Engineer Intern",
    company: "Infineon Technologies",
    description: `Automated the extraction of Errata data into Excel using Python's openpyxl, increasing workflow efficiency.
              Utilized Git for version control, ensuring meticulous tracking and documentation of code changes throughout the
              project lifecycle.Enhanced Excel sheet performance and scalability by optimizing backend data processing with Python libraries.`,
    technologies: ["XML","Python"],
  },
  
];

export const PROJECTS = [
  {
    title: "Full-Stack Food Ordering Application",
    image: project1,
    description:
      "Designed and developed a responsive food ordering web application using React.js for the frontend.Built the backend with Node.js and Express, leveraging MongoDB for database management.Implemented secure user authentication and real-time shopping cart functionality.Integrated Stripe for secure online payment processing. Developed an admin dashboard for order tracking, status updates, and management.",
    technologies: [ "React","Express", "Node.js", "MongoDB"],
    githubLink: "https://food-delivery-frontend-o9me.onrender.com"
    
  },

  {
    title: "Nutritionist Generative AI Doctor",
    image: project2,
    description: 
      "Developed an AI-driven web app that allows users to upload food images and receive detailed health assessments along with nutrient information. Utilized Google Gemini Pro for image analysis and integrated Streamlit for a user-friendly interface. Managed secure API calls using Python Dotenv, ensuring a smooth and accurate health evaluation process.",
    "technologies": ["Google Gemini Pro", "Streamlit"],
    githubLink: "https://github.com/roadrash99/CalorieAdvisor"
  },

  {
    title: "End-to-End YouTube Video Transcribe Summarizer LLM App",
    image: project3,
    description: 
      "Built an AI-powered web application that transcribes and summarizes YouTube videos, providing users with quick insights into video content. Integrated Google Generative AI for summarization, and used the YouTube Transcript API for accurate transcription. Managed secure API key handling through Python Dotenv, ensuring a seamless user experience.",
    "technologies": ["Google Generative AI", "Streamlit", "YouTube Transcript API"],
    githubLink: "https://github.com/roadrash99/YTTranscriber"
  }
  

];

export const CONTACT = {
  phoneNo: "+1 (913)-202-9980 ",
  email: "rashmik.manchiraju7@gmail.com",
};
