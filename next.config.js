/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Игнорировать ошибки ESLint при сборке на продакшн
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
