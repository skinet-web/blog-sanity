/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    REACT_APP_SANITY_PROJECT_ID: "zaaqdy45",
    REACT_APP_SANITY_TOKEN:
      "skgSyYffMhejuXvC774ZfUg1J74buyN8uSVMqe5jgfCo0u6vV9UKvrT8N7wyYgArOU8tjPCokpn8m0Iaoc2suDddEpccanatPjHmwVJboc0fY5mADyCchmzFPa868vduvlpWGl92rD2wqmhgd0CibJbEWqjEO8USvvvYdAmqAarbwmC6WKmM",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
