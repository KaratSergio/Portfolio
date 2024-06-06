import { Project } from "../../types";

export const projects: Project[] = [
  {
    name: "Food_Boutique",
    image_path: "/images/foodboutique.png",
    deployed_url: "https://karatsergio.github.io/project-caramel/",
    github_url: "https://github.com/KaratSergio/project-caramel",
    category: ["JavaScript", "TeamProject"],
    description: "The project is a website for purchasing food.",
    key_techs: ["Java Script", "HTML", "CSS", "API"],
  },
  {
    name: "Filmistry",
    image_path: "/images/filmistry.png",
    deployed_url: "https://karatsergio.github.io/project-art-of-cinema/",
    github_url: "https://github.com/KaratSergio/project-art-of-cinema",
    category: ["React"],
    description:
      "The project involves working with the TMDb API to obtain information about films.",
    key_techs: ["React", "Redux", "YouTube API", "TMDb API"],
  },
  {
    name: "ToDoshka_Back",
    image_path: "/images/todoshka.png",
    deployed_url: "https://todoshka-back-5xf7.onrender.com/",
    github_url: "https://github.com/KaratSergio/ToDoshka_back",
    category: ["Node", "TeamProject"],
    description: "The project is a backend for an application like Trello...",
    key_techs: ["Node", "Express", "Mongo", "REST API"],
  },
  {
    name: "AuthMaster_back",
    image_path: "/images/auth-master.png",
    deployed_url: "https://github.com/KaratSergio/AuthMaster_back",
    github_url: "https://github.com/KaratSergio/AuthMaster_back",
    category: ["Nest"],
    description:
      "This project leverages modern web development practices to deliver a secure and scalable application. By using JWT for authentication, role access control, and robust data validation, it ensures the security and integrity of user data. The use of PostgreSQL with Sequelize provides efficient database management, while Docker ensures consistent deployment across various environments. Comprehensive API documentation and a well-structured configuration for different environments further enhance the maintainability and usability of the application.",
    key_techs: [
      "Node",
      "Nest",
      "PostgreSQL",
      "REST API",
      "Swagger",
      "TypeScript",
      "Multer",
      "JWT ",
      "bcryptjs ",
    ],
  },
  {
    name: "CamperRent",
    image_path: "/images/campers.png",
    deployed_url: "https://karatsergio.github.io/CamperRent_UA/",
    github_url: "https://github.com/KaratSergio/CamperRent_UA",
    category: ["React"],
    description:
      "This repository contains a web application for a company that provides campervan services in Ukraine rent. Home page with a general description of the services provided by the company. A page containing a catalog of campers of various configurations, which the user can filter by location, equipment and type. A page with ads that have been added to favorites by the user.",
    key_techs: [
      "React ",
      "Redux",
      "styled-components",
      "redux-toolkit",
      "axios",
      "react-hook-form",
    ],
  },
];
