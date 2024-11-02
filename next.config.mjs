/** @type {import('next').NextConfig} */

const nextConfig = {
    // це ми додали для часткової часткової попередньої візуалізації ppr
    experimental: {
        ppr: 'incremental',
      },



};

export default nextConfig;
