/** @type{import('nextra').NextraConfig} */
const config = {
  theme: './src/theme/index.tsx',
  themeConfig: './theme.config.tsx',
}

const withNextra = require('nextra')(config)

module.exports = {
  ...withNextra(),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true,
  },
}