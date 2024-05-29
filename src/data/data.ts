import { Project } from "../../types";

export const projects: Project[] = [
  {
    name: "Food_Boutique",
    image_path: "/images/foodboutique.png",
    deployed_url: "https://karatsergio.github.io/project-caramel/",
    github_url: "https://github.com/KaratSergio/project-caramel",
    category: ["JavaScript"],
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
    category: ["Node"],
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
      "Backend API project for user registration and authorization using JWT, along with role management and access control",
    key_techs: ["Node", "Nest", "PostgreSQL", "REST API"],
  },
];
