/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: true,
    }
};
const { withContentlayer } = require('next-contentlayer')
module.exports = withContentlayer({...nextConfig});