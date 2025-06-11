import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";

export const ABOUT_TEXT = `I’m a passionate software engineer, recently graduated with a Master’s in Computer Science from the University of Central Missouri. I bring a strong foundation in building scalable, efficient web applications, with hands-on expertise in front-end technologies like React and Angular, and back-end frameworks including Node.js, Express, and databases such as PostgreSQL, MongoDB, and MySQL.

My journey began with a B.Tech in Electronics and Communication Engineering from BIT Mesra and has since included impactful roles at Jio Platforms, Infineon Technologies, and Re.Use.Full. Through these experiences, I’ve developed production-ready applications, worked with cloud platforms like AWS, Docker, and Kubernetes, and more recently, explored the exciting domain of AI agents—building intelligent solutions using LangGraph, LangChain, and ChatGPT.

I’m now actively seeking full-time opportunities where I can contribute to meaningful projects and collaborate with innovative teams. I’m especially drawn to roles that combine software engineering, AI integration, and cloud technologies to solve real-world problems.

Outside of work, I enjoy playing and watching cricket and football, traveling, staying active, and reading self-help books to continuously improve myself.

Technical Skills: Full-Stack Development | JavaScript | React | Angular | Node.js | Express | MongoDB | MySQL | PostgreSQL | Python | Java | Docker | Kubernetes | AWS | AI Agents | LangChain | LangGraph | Prompt Engineering | Cloud Computing`;


export const EXPERIENCES = [

  {
    year: "Jan 2025 - May 2025",
    role: "Software Development Engineer Intern",
    company: "Re.Use.Full",
    technologies: ["React","C#","AWS","AI tools"],
  },
  {
    year: "July 2022 - Apr 2023",
    role: "Software Development Engineer - 1 ",
    company: "Jio Platforms",
    technologies: ["HTML", "Sass", "Angular", "Typescript"],
  },
  {
    year: "Jan 2022 - June 2022",
    role: "Software Development Engineer Intern",
    company: "Infineon Technologies",
    technologies: ["XML","Python"],
  },
  {
    year: "Aug 2020 - Dec 2021",
    role: "Software Development Engineer",
    company: "KFortune",
    technologies: ["Java","Spring Boot", "Kafka", "Frontend Development"],
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
