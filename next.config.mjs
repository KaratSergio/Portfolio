// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/Portfolio" : "",
  assetPrefix: isProd ? "/Portfolio/" : "",
  images: {
    loader: "imgix",
    path: isProd ? "https://KaratSergio.github.io/Portfolio/" : "/",
  },
};

export default nextConfig;
