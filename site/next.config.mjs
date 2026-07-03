/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for plain web hosts (cPanel etc.). Remove `output` and
  // `trailingSlash` when server features (forms, API routes) arrive.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
