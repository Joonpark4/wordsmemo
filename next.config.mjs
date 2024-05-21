/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // 모든 페이지에 대해 헤더를 설정하거나 특정 경로에 대해서만 설정할 수 있습니다.
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: "compute-pressure=(self)", // 여기에서 필요한 정책을 설정합니다.
          },
        ],
      },
    ];
  },
};

export default nextConfig;
