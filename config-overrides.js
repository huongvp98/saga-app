const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constant": path.resolve(__dirname, "src/constant"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@data-access": path.resolve(__dirname, "src/data-access"),
      "@redux-store": path.resolve(__dirname, "src/redux-store"),
      "@resources": path.resolve(__dirname, "src/resources"),
      "@action": path.resolve(__dirname, "src/redux-store/action"),
      "@reducer": path.resolve(__dirname, "src/redux-store/reducer"),
      "@saga": path.resolve(__dirname, "src/redux-store/saga"),
    },
  };
  return config;
};
