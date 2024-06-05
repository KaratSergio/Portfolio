import { NavItemProps } from "../../types";

const NavItem = ({ value, handlerFilterCategory, active }: NavItemProps) => {
  const className = `capitalize font-bold tracking-wider cursor-pointer  px-2 py-1 rounded-lg hover:bg-yellow ${
    active === value ? "bg-yellow" : ""
  }`;

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

export default NavItem;
