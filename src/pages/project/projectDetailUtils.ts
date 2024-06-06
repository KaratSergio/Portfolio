// import { GetStaticPaths, GetStaticProps } from "next";
// import { projects } from "../../data/data";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = projects.map((project) => ({
//     params: { id: project.name },
//   }));
//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const project = projects.find((p) => p.name === params?.id);
//   return { props: { project } };
// };
