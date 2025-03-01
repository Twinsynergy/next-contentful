const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
module.exports = {
  distDir: 'build',
  // basePath: '/next-contentful',
  // assetPrefix: '/next-contentful/',
  // assetPrefix: '/next-contentful/out/',
  env: {
    REACT_APP_CONTENTFUL_SPACE_ID: process.env.REACT_APP_CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_SPACE_ID,
    REACT_APP_CONTENTFUL_ACCESS_TOKEN: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN,
    REACT_APP_BASE_PATH: ''
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //   }
  // },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  // // reactStrictMode: true,
  // trailingSlash: true,
};