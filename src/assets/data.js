import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Iqbal Fajar",
  title: "Front-End Developer/Designer",
  social: {
    github: "https://github.com/balfajr",
    email: "iqbalfjr888@gmail.com",
  },
  about: {
    title: "Profile Overview",
    description:
      "I am Muhamad Iqbal Fajar, a dedicated student at Universitas Indraprasta PGRI, specializing in front-end development. I have developed a strong skill set in programming languages such as HTML, CSS, JavaScript, and frameworks like React and Tailwind. In addition to my programming skills, I have a passion for graphic design and enjoy using tools like Adobe Illustrator and Adobe Photoshop to create visually appealing designs. My expertise in front-end development allows me to build engaging and responsive web applications, while my design skills help enhance the user experience through attractive interfaces. I am committed to continuous learning and improvement in both coding and design, which I believe positions me well for future opportunities in the tech industry. ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "My Recent Work",
      description: "A website for event organizer, which is currently in development",
      tags: [
        "portofolio",
        "eventorganizer",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://eventorganizer-landingpage.vercel.app/",
      
    },
    {
      title: "Uni Project",
      description: "My uni project a website for wedding invitation using ReactJS and Tailwind",
      tags: [
        "wedding",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://balfajr.github.io/wedding/"
    }
  ]
};
export default data;
