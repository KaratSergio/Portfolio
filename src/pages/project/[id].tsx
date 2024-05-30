import { Project } from "../../../types";
import { AiFillGithub, AiFillProject, AiFillCaretLeft } from "react-icons/ai";
import { getStaticPaths, getStaticProps } from "./projectDetailUtils";

import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ project }: { project: Project }) => {
  if (!project) return <div>Project not found</div>;

  return (
    <div
      className="container bg-slate-200 dark:bg-zinc-950 mx-auto px-4 relative"
      style={{ height: "65vh" }}
    >
      <Link href="/projects">
        <span className="absolute flex top-2 right-6 underline">
          <AiFillCaretLeft className="mr-1 mt-1" />
          Back
        </span>
      </Link>
      <div className="flex flex-col ml-1 mt-8 relative md:flex-row">
        <h1 className="absolute top-2 text-3xl mt-1 py-1 px-2 rounded bg-neutral-100/45 dark:bg-neutral-400/45">
          {project.name}
        </h1>
        <div className="md:w-1/2">
          <Image
            className="rounded-lg"
            src={project.image_path}
            alt={project.name}
            layout="responsive"
            height={150}
            width={300}
          />
          <div className="flex justify-center mt-4">
            <a
              href={project.github_url}
              className="mr-4 flex items-center py-1 px-2 bg-neutral-400 dark:bg-neutral-600"
            >
              <AiFillGithub className="mr-1" /> GitHub
            </a>
            <a
              href={project.deployed_url}
              className="flex flex-wrap items-center py-1 px-2 bg-neutral-400 dark:bg-neutral-600"
            >
              <AiFillProject className="mr-1" /> Live Demo
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-4">
          <h2 className="text-2xl">Project Description:</h2>
          <p className="mt-1">{project.description}</p>
          <div className="mt-4 max-w-64">
            <h2 className="text-2xl">Technologies Used:</h2>
            <ul className="flex flex-wrap gap-2 max-w-80 mt-1">
              {project.key_techs.map((tech) => (
                <li
                  className="flex items-center py-1 px-2 bg-neutral-300 dark:bg-neutral-600"
                  key={tech}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { getStaticPaths, getStaticProps };
export default ProjectDetail;
