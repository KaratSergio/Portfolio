import { ProjectsNavbarProps } from "../../types";
import NavItem from "./NavItem";

const ProjectsNavbar = ({
  handlerFilterCategory,
  active,
}: ProjectsNavbarProps) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem
        value="All"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="React"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="JavaScript"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="Node"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="Nest"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
    </div>
  );
};

export default ProjectsNavbar;
