import { Project } from "../../../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { getStaticPaths, getStaticProps } from "./projectDetailUtils";

import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ project }: { project: Project }) => {
  if (!project) return <div>Project not found</div>;

  return (
    <div className="container mx-auto px-4 relative" style={{ height: "65vh" }}>
      <Link href="/projects">
        <span className="absolute top-4 right-4 text-blue-500 underline">
          Go Back
        </span>
      </Link>
      <h1 className="text-3xl my-4">{project.name}</h1>
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={project.image_path}
            alt={project.name}
            layout="responsive"
            height={150}
            width={300}
          />
        </div>
        <div className="md:w-1/2 md:ml-4">
          <p className="mt-4">{project.description}</p>
          <div className="flex mt-4">
            <a
              href={project.github_url}
              className="mr-4 flex items-center text-blue-500 underline"
            >
              <AiFillGithub className="mr-1" /> GitHub
            </a>
            <a
              href={project.deployed_url}
              className="flex items-center text-blue-500 underline"
            >
              <AiFillProject className="mr-1" /> Live Demo
            </a>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl">Technologies Used:</h3>
            <ul>
              {project.key_techs.map((tech) => (
                <li key={tech}>{tech}</li>
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
