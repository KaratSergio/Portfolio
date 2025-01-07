import { ProjectsNavbarProps } from "../../types";
import NavItem from "./NavItem";

const ProjectsNavbar = ({
  handlerFilterCategory,
  active,
}: ProjectsNavbarProps) => {
  return (
    <ul className="flex px-3 py-2 space-x-3 overflow-x-auto list-none scrollbar-thin">
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
        value="Next"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="Nest"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="ReactNative"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="TeamProject"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
    </ul>
  );
};

export default ProjectsNavbar;
