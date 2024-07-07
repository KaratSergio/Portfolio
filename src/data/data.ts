import { Project } from "../../types";

const isLocal = process.env.NODE_ENV === "development";

const imageBasePath = isLocal ? "/images/" : "./images/";

export const projects: Project[] = [
  {
    name: "Food_Boutique",
    image_path: `${imageBasePath}Food_Boutique.png`,
    deployed_url: "https://karatsergio.github.io/project-caramel/",
    github_url: "https://github.com/KaratSergio/project-caramel",
    category: ["JavaScript", "TeamProject"],
    description:
      "The project is a website for purchasing food products. This application is built on Vanilla JavaScript and uses modern development tools to provide a fast and interactive experience. Implemented filtering, pagination, product card, order basket..",
    key_techs: ["Java Script", "HTML", "CSS", "API"],
  },
  {
    name: "Filmistry",
    image_path: `${imageBasePath}Filmistry.png`,
    deployed_url: "https://karatsergio.github.io/project-art-of-cinema/",
    github_url: "https://github.com/KaratSergio/project-art-of-cinema",
    category: ["React"],
    description:
      "The project involves working with the TMDb API to retrieve information about movies. It is a React-based front-end application that allows users to search for movies, view movie information, and interact with various functions provided by the TMDb API",
    key_techs: ["React", "Redux", "YouTube API", "TMDb API"],
  },
  {
    name: "ToDoshka_back",
    image_path: `${imageBasePath}ToDoshka_back.png`,
    deployed_url: "https://todoshka-back-5xf7.onrender.com/",
    github_url: "https://github.com/KaratSergio/ToDoshka_back",
    category: ["Node", "TeamProject"],
    description:
      "ToDoshka_back is a backend for an application similar to Trello. It's designed to manage tasks, projects, and boards, providing functionality similar to the popular collaboration tool Trello. The application includes user authorization, storing data in a database, uploading and storing files, and interacting with external APIs.",
    key_techs: [
      "Node",
      "Express",
      "Mongo",
      "Claudinary",
      "Swagger",
      "REST API",
    ],
  },
  {
    name: "AuthMaster_back",
    image_path: `${imageBasePath}AuthMaster_back.png`,
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
    image_path: `${imageBasePath}CamperRent.png`,
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
  {
    name: "Phonebook",
    image_path: `${imageBasePath}Phonebook.png`,
    deployed_url: "https://karatsergio.github.io/PhoneBook/",
    github_url: "https://github.com/KaratSergio/PhoneBook",
    category: ["React"],
    description:
      "This project is a web application for managing contacts, including functions for registering and authorizing users, adding and deleting contacts, and filtering contacts. The app allows users to register, log in and manage their contacts securely. Users can add new contacts, remove unnecessary ones, and filter contacts based on specific criteria such as name or email.",
    key_techs: [
      "React ",
      "Redux Toolkit",
      "React-i18next",
      "Notiflix",
      "axios",
      "ReduxThunk",
    ],
  },
  {
    name: "LearnLingo",
    image_path: `${imageBasePath}LearnLingo.png`,
    deployed_url: "https://karatsergio.github.io/Language_Leap/",
    github_url: "https://github.com/KaratSergio/Language_Leap",
    category: ["React"],
    description:
      "The project is a website that provides online language lessons. It was created using React, Redux, React Router Dom and Firebase for authentication and data storage. Styling is implemented using Tailwind CSS. Forms are managed and validated using React Hook Form and Yup. The Redux Toolkit provides state management. Additional libraries are used for support functions and build tools.",
    key_techs: [
      "React ",
      "Redux Toolkit",
      "Firebase",
      "Notiflix",
      "axios",
      "TypeScript",
      "Tailwind-CSS",
    ],
  },
];
