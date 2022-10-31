/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = {
//   images: {
//     domains: ["as2.ftcdn.net"]
//   }
// }

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: `http://localhost:3000`,
        destination: `http://localhost:7000`,
      },
    ];
  };
  return {
    rewrites,
  };
};

module.exports = nextConfig
