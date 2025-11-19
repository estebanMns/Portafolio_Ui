import type { NextConfig } from "next";

const NextConfig = {
allowedDevOrigins: [
    'localhost:3000',
    '192.168.1.67:3000', // ⚠️ Reemplaza con tu IP real si cambia
    '*.local', // Opcional: permite cualquier subdominio .local
  ],
};


const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
