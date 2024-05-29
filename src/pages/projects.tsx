import { useState } from "react";
import { Category } from "../../types";
import { projects as projectsData } from "../data/data";

import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState<Category | "All">("All");

  const handlerFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) =>
        project.category.includes(category)
      );
      setProjects(filteredProjects);
    }
    setActive(category);
  };

  return (
    <section
      className="px-5 py-2 overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack"
      style={{ height: "65vh" }}
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
