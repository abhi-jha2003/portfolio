import {
    mobile,
    backend,
    creator,
    frontend,
    fullstack,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    bootcamp,
    shopify,
    githubcom,
    
    freelancer,
    carrent,
    jobit,
    tripguide,
    airbnb,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },

    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Enthusiast",
      icon: creator,
    },
    {
      title: "Frontend Developer",
      icon: frontend, // Add an icon representing frontend development
    },
    {
      title: "Full Stack Developer",
      icon: fullstack, // Icon for full-stack development
    },
  
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "GitHub Community",
      icon: githubcom,  // Replace with a GitHub or similar icon
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Contributed to open-source projects on GitHub by solving issues and adding features.",
        "Gained experience collaborating with other developers and understanding version control practices.",
        "Enhanced my skills in JavaScript, HTML, and CSS through real-world coding experience.",
      ],
    },
    {
      title: "MERN Stack Development Bootcamp",
      company_name: "Udemy",
      icon: bootcamp,
      iconBg: "#F0DB4F",
      date: "June 2023 - August 2023",
      points: [
        "Gained hands-on experience in building full-stack applications using MongoDB, Express, React, and Node.js.",
        "Developed projects like a job portal and a task manager to practice and refine my skills.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Freelance",
      icon: freelancer,  // Replace with a suitable freelance icon
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Developed small-scale websites for clients, focusing on user-friendly design and functionality.",
        "Communicated with clients to understand their requirements and deliver high-quality projects.",
        "Built websites using HTML, CSS, JavaScript, and React.js, and optimized them for performance.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Job Portal",
      description:
        "A full-stack web application where users (job seekers and employers) can register, post job listings, search for job openings, and apply for positions. Employers can manage applicants, while applicants can track their applications.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "yellow-text-gradient",
        },
      ],
      image: jobit, // Replace with your image variable
      source_code_link: "https://github.com/abhi-jha2003/Jobportal", // Replace with your GitHub repository link
    },
    {
      name: "Airbnb Clone",
      description:
        "A platform for users to search and book unique accommodations worldwide. Offers an easy-to-use interface with filters, detailed property listings, and secure bookings for both guests and hosts.",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "yellow-text-gradient",
        },
      ],
      image: airbnb, // Replace with your image variable
      source_code_link: "https://github.com/yourusername/airbnb-clone", // Replace with your GitHub repository link
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };