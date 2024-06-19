import { Project } from "../../../types";
import { AiFillGithub, AiFillProject, AiFillCaretLeft } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

import { GetStaticPaths, GetStaticProps } from "next";
import { projects } from "../../data/data";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.name === params?.id);
  return { props: { project } };
};

const ProjectDetail = ({ project }: { project: Project }) => {
  if (!project) return <div>Project not found</div>;

  const isLocal = process.env.NODE_ENV === "development";
  // const image_path = isLocal
  //   ? `/images/${project.name}.png`
  //   : `../images/${project.name}.png`;

  return (
    <div
      className="container bg-slate-200 dark:bg-zinc-950 mx-auto px-4 pb-4 relative overflow-x-auto scrollbar-thin"
      style={{ height: "70vh" }}
    >
      <Link href="/projects">
        <span className="absolute flex top-2 right-6 underline">
          <AiFillCaretLeft className="mr-1 mt-1" />
          Back
        </span>
      </Link>
      <div className="flex flex-col ml-1 mt-8 md:flex-row">
        <div className="md:w-1/2">
          <Image
            className="rounded-lg"
            src={project.image_path}
            alt={project.name}
            height={450}
            width={600}
            style={{ aspectRatio: "450 / 450" }}
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
          <h2 className=" text-3xl  py-1 px-2 rounded bg-neutral-100/45 dark:bg-neutral-400/45">
            {project.name}
          </h2>
          <p className="text-2xl mt-4">description:</p>
          <p className="mt-1 pl-4">{project.description}</p>
          <div className="mt-4 max-w-md">
            <h2 className="text-2xl mb-2">technologies used:</h2>
            <ul className="flex flex-wrap pl-4 gap-2 mt-1">
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

export default ProjectDetail;
