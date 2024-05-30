import { useRouter } from "next/router";
import { Project } from "../../types";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${project.name}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Image
        src={project.image_path}
        alt={project.name}
        layout="responsive"
        objectFit="cover"
        height={50}
        width={300}
      />
      <p className="my-2 text-center">{project.name}</p>
    </div>
  );
};

export default ProjectCard;
