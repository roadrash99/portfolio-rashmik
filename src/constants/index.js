import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";

export const ABOUT_TEXT = `I build intelligent, scalable web applications by merging robust full-stack engineering with cutting-edge AI.

With a Master's in Computer Science and hands-on experience developing production code at Jio Platforms and Infineon, I thrive on creating solutions that matter.

What I build with:
• Front-End: React, Angular, JavaScript/TypeScript,Next.js
• Back-End: Java/Spring Boot, REST/SOAP, SQL/NoSQL, Redis/Kafka ,Node.js, Express, Python.
• AI: LangChain, LangGraph, LLM Integration
• Infrastructure: AWS, Docker, Kubernetes, PostgreSQL, MongoDB

What I'm seeking:
A full-time Software Engineer role where I can build, innovate, and solve complex problems using my skillset. I'm passionate about collaborative teams and meaningful projects.

Outside of coding, I'm a cricket and football enthusiast, an avid traveler, and a lifelong learner.

Let's explore how I can contribute to your vision.`
export const EXPERIENCES = [

  {
    year: "Jan 2025 - May 2025",
    role: "Software Development Engineer Intern",
    company: "Re.Use.Full",
  },
  {
    year: "July 2022 - Apr 2023",
    role: "Software Development Engineer - 1 ",
    company: "Jio Platforms",
  },
  {
    year: "Jan 2022 - June 2022",
    role: "Software Development Engineer Intern",
    company: "Infineon Technologies",
  },
  {
    year: "Aug 2020 - Dec 2021",
    role: "Software Development Engineer",
    company: "KFortune",
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
