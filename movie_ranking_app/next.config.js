/** @type {import('next').NextConfig} */

const key = process.env.API_KEY;
const today = new Date();
const yesterday = Number(
  `${today.getFullYear()}` +
    `${
      today.getMonth() + 1 >= 10
        ? today.getMonth() + 1
        : `0${today.getMonth() + 1}`
    }` +
    `${
      today.getDate() - 1 >= 10
        ? today.getDate() - 1
        : `0${today.getDate() - 1}`
    }`
);
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${yesterday}`,
      },
    ];
  },
};

module.exports = nextConfig;
