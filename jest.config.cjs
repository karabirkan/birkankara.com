module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // If you use CSS modules, add a mapper for them
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
