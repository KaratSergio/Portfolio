import { useRouter } from "next/router";
import { Project } from "../../types";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${project.name}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Image
        src={project.image_path}
        alt={project.name}
        height={50}
        width={350}
      />
      <p className="my-2 text-center">{project.name}</p>
    </div>
  );
};

export default ProjectCard;
