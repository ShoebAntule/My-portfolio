import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like Html5, CSS3, JavaScript React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "AradhyeTech",
    description: "Designed and built intuitive user interfaces for web applications using Next.js and React. Partnered with backend teams to ensure seamless integration with Node.js APIs. Focused on enhancing UI responsiveness and performance optimization.",
    technologies: ["HTML", "CSS", "Vue.js", "MySQL", "Figma"],
    offerLetter: "/Aradhyetech.pdf", // Path to the offer letter
  },
  {
    year: "2022 - 2023",
    role: "Web Developer",
    company: "Prodigy Infotech",
    description: "Created and managed dynamic web applications utilizing JavaScript, React.js, and Node.js. Developed RESTful APIs to streamline data communication. Worked closely with teams across departments to ensure efficient project execution and timely delivery.",
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    offerLetter: "/public/prodigyinfotech.pdf",
  },
  {
    year: "2025",
    role: "Web Developer",
    company: "Asthatic Social",
    description: "Engineered and enhanced web solutions using JavaScript, React.js, and Node.js. Designed and structured APIs to support efficient data exchange. Contributed to team discussions and collaborated on UI/UX improvements to refine user experience.",
    technologies: ["React", "TypeScript", "Tailwind", "Figma"],
    offerLetter: "/Shoeb Hiring Letter - Asthatic Social.pdf",
  },

  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];



export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    url: "https://e-commerce-by-shoeb.netlify.app/account"
  },
  {
    title: "IBI Cyber Security Website",
    image: project2,
    description: "A cybersecurity-focused website designed to showcase services, enhance online security awareness, and provide secure solutions for businesses. Features include service listings, contact forms, and a modern, responsive design.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    url: "https://ibigroup.vercel.app/"
},
  {
    title: "Weather App",
    image: project3,
    description:
      "A website to check wheater of any location in the India.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    url: "https://climatechronicle.netlify.app/"
  },
  {
    title: "TunePlaylist",
    image: project4,
    description:
      "A music website where you can enjoy music without ads",
    technologies: ["HTML", "CSS", "JavaScript", "WebHostMost"],
    url: "https://tuneplaylists.freewebhostmost.com/"
  },
];

export const CONTACT = {
  address: "Mumbai,Maharashtra",
  phoneNo: "+91 8779030806 ",
  email: "shoebantule@gmail.com",
  CV: "Download CV",
};
