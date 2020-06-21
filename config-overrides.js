const { join } = require("path");
const { mergeDeepLeft } = require("ramda");

const generateJoin = (...a) => (...b) => join(__dirname, ...a, ...b);

const joinSrc = generateJoin("src");
const joinJestDevtools = generateJoin("devtools", "jest");

module.exports = {
  webpack: mergeDeepLeft({
    resolve: {
      alias: {
        "#components": joinSrc("components"),
        "#constants": joinSrc("constants"),
        "#scenes": joinSrc("scenes"),
        "#services": joinSrc("services"),
        "#utils": joinSrc("utils"),
        "#store": joinSrc("store"),
        "#theme": joinSrc("theme"),
      },
    },
  }),
  jest: (config) => ({
    ...config,
    globalSetup: joinJestDevtools("/global-setup.js"),
    coverageReporters: ["json", "html", "lcov", "text", "text-summary"],
    coverageDirectory: "reports",
    collectCoverageFrom: [
      "src/**/*.jsx",
      "!**/node_modules/**",
      "!src/**/*.stories.jsx",
    ],
    setupFilesAfterEnv: config.setupFilesAfterEnv.concat(
      joinJestDevtools("setupTests.js")
    ),
    moduleNameMapper: {
      ...config.moduleNameMapper,
      "^#components$": "<rootDir>/src/components",
      "^#constants$": "<rootDir>/src/constants",
      "^#scenes$": "<rootDir>/src/scenes",
      "^#services$": "<rootDir>/src/services",
      "^#utils$": "<rootDir>/src/utils",
      "^#store$": "<rootDir>/src/store",
      "^#theme$": "<rootDir>/src/theme",
    },
  }),
};
