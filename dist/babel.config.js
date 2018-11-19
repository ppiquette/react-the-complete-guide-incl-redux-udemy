"use strict";

module.exports = function (api) {
  var presets = ["@babel/env", "@babel/preset-react"];
  var plugins = ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"]; // Cache the returned value forever and don't call this function again.

  api.cache(true);
  return {
    presets: presets,
    plugins: plugins
  };
};
//# sourceMappingURL=babel.config.js.map