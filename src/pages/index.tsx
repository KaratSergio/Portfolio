import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, facilis,
        error voluptatem dignissimos laboriosam soluta fugiat ad molestias,
        eligendi veritatis natus labore nulla. Reprehenderit, doloribus ipsa!
        Sapiente quam quis, dolorem odio necessitatibus alias voluptatum
        blanditiis dolores obcaecati, veritatis fugiat, debitis repudiandae
        veniam modi aliquam sequi illo. Aperiam reprehenderit suscipit
        doloribus!
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          Lorem ipsum dolor sit amet.
        </h4>
      </div>
    </div>
  );
};

export default About;
