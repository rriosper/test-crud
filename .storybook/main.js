const { resolve, join } = require("path");
const { mergeDeepLeft } = require("ramda");

const srcPath = resolve(__dirname, "..", "src");
const joinSrc = (...x) => join(srcPath, ...x);

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
  ],
  webpack: mergeDeepLeft({
    resolve: {
      alias: {
        "#components": joinSrc("components"),
        "#constants": joinSrc("constants"),
        "#scenes": joinSrc("scenes"),
        "#utils": joinSrc("utils"),
        "#store": joinSrc("store"),
        "#theme": joinSrc("theme"),
      },
    },
  }),
};
