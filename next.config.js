/** @type {import('next').NextConfig} */

const isProd = true
const nextConfig = {
    output:"export",
    images:{unoptimized: true},
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/pallishreeb/pallishree/gh-pages/' : '',

}

module.exports = nextConfig
