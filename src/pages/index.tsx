import { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex flex-col flex-grow px-6 pt-1 relative"
      style={{ height: "65vh" }}
    >
      <h6 className="my-3 text-base font-medium">
        <strong>Hi, I&apos;m Sergio</strong>. I develop web applications as a
        full-stack developer. I started doing this recently, but have already
        gained considerable experience. The main front-end development stack
        includes <strong>React</strong> and <strong>Redux</strong>, which allows
        me to create dynamic and responsive user interfaces. On the backend, I
        use <strong>Node.js</strong> and <strong>Express</strong> to ensure the
        application backend runs reliably and efficiently. My work covers the
        full development cycle, from design to deployment of ready-made
        solutions.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 relative overflow-x-auto scrollbar-thin"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <ul className="grid grid-cols-2 gap-4 my-3 text-xl font-semibold tracking-wide ">
          <li>
            <strong>I CAN</strong>
            <br />
            Currently, I am actively developing my skills in working with React
            and the server-side JavaScript environment, using Node.js and its
            Express framework.
          </li>
          <li>
            <strong>I STUDY</strong>
            <br />I am diving into the study of cutting-edge frameworks such as
            Next.js and Nest.js, aiming to expand my professional toolkit and
            enhance the quality of my developments.
          </li>
          <li>
            <strong>I&apos;M LOOKING FOR</strong>
            <br />
            Moreover, I am open to new opportunities and actively seeking my
            team. I am ready to participate in interesting and promising
            projects where I can make a contribution and advance in my
            professional growth.
          </li>
          <li>
            there is also introductory experience in working with React Native{" "}
            Tailwind CSS PostgreSQL MongoDB MariaDB
          </li>
        </ul>
        <div className="absolute bottom-4 right-4">
          {theme === "dark" ? (
            <Image
              src="./images/react.svg"
              alt="React logotype"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="./images/node.svg"
              alt="Node logotype"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
