import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavItemProps {
  active: string;
  setActive: (name: string) => void;
  name: string;
  route: string;
}

const NavItem = ({ active, setActive, name, route }: NavItemProps) => {
  return active !== name ? (
    <Link
      href={route}
      className="mx-2 cursor-pointer hover:border-b-4 hover:text-green"
      onClick={() => setActive(name)}
    >
      {name}
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();

  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (pathname === "/") setActive("About");
    else if (pathname === "/projects") setActive("Projects");
    else if (pathname === "/resume") setActive("Resume");
  }, [pathname]);

  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green">
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
