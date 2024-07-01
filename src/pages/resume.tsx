import { useState } from "react";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);
  const resumePDF = "./assets/Serhii_Safonov_CV.pdf";

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <section
      className="flex flex-col items-center justify-between p-24"
      style={{ height: "70vh" }}
    >
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello i&apos;am Sergio ....
          <code className="font-mono font-bold">here my resume...</code>
        </p>
        <div className="flex ml-24 justify-center">
          <button
            onClick={toggleResume}
            className=" border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >
            {showResume ? "Hide resume" : "Show resume"}
          </button>
          <a
            href={resumePDF}
            download="Serhii_Safonov_CV.pdf"
            className="ml-4 border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >
            Download resume
          </a>
        </div>
      </div>

      {showResume && (
        <div className="mb-4 mt-4">
          <object
            data={resumePDF}
            type="application/pdf"
            width="1000px"
            height="400px"
          >
            <p>
              Your browser does not support PDF display. You can{" "}
              <a href={resumePDF}>download file here</a>.
            </p>
          </object>
        </div>
      )}
    </section>
  );
};

export default Resume;
