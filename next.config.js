const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
images: {
disableStaticImages: true,
},
};

module.exports = withPlugins(
[withImages],
nextConfig
);