import {
    mobile,
    backend,
    creator,
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
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Programmer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
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
      title: "Secondary-school",
      company_name: "Little Flowers School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2010 - April 2018",
      points: [
        "Consistently ranked among the top students in my class, demonstrating strong performance in subjects such as mathematics, science, and languages",
        "Served as a class representative, demonstrating leadership skills by effectively coordinating and communicating class-related matters.",
        "Engaged in extracurricular activities such as debate, sports, or cultural events, showcasing a well-rounded personality and time management skills.",
        "Passed the secondary-high School with 89 percent . ",
      ],
    },
    {
      title: "Senior Secondary high School",
      company_name: "Himalyan Public School",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2018 - March 2020",
      points: [
        "Maintained an exceptional academic record throughout senior secondary school, consistently ranking among the highest-scoring students in the class.",
        "Demonstrated proficiency in challenging subjects, particularly excelling in advanced courses like mathematics, science, and languages.",
        " Engaged in meaningful volunteer work, contributing to the betterment of the school and the local community, and demonstrating a commitment to social responsibility.",
        "Achieved outstanding results in senior secondary board examinations, reflecting a strong grasp of the curriculum and excellent problem-solving skills.",
      ],
    },
    {
      title: "JEE",
      company_name: "NIT",
      icon: shopify,
      iconBg: "#383E56",
      date: "March 2020 - December 2021",
      points: [
        "I Cleared one of the most Prestigious and toughtest exam of india ",
        "I Got Admission in National Institue of technology , Agartala",
      ],
    },
    {
      title: "Programming Languages",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Learned new programming Language called C and C++",
        "Actively learning new programming languages like java,python,etc.",
        "Also Deeply focused on learning Data Structure and Algorithm.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Learned HTML,CSS,TailWind, Javascript, React , Nodejs, Express, MongoDb",
        "Developing and maintaining web applications using React.js, JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Uttam proved me wrong.",
      name: "Priti Jha",
      designation: "Product Manager",
      company: "Microsoft",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a Programmer and a developer like you.",
      name: "Aryan",
      designation: "Intern",
      company: "Google",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Truely hard working,passionate and helping person and a creative programmer",
      name: "Astha",
      designation: "Classmate",
      company: "Nita",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather_App",
      description:
        "Web-based platform that allows users to search weather of any particular City in world",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name:"Nodejs",
          color:"green-text-gradient"
        },
        {
          name:"Express",
          color:"green-text-gradient"
        },
        {
          name: "Api",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/coderight1/web_project_weather-app/tree/master/expressweb",
    },
    
    {
      name: "Chat-App",
      description:
        "Web application that enables users to Chat in real time with other person like other chatting apps.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/coderight1",
    },
    {
      name: "Ecommerce_website",
      description:
        "A comprehensive Ecommerce website to buy different products similar to any other websites like amazon and Flipkart.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/coderight1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };