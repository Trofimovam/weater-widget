const path = require("path");

module.exports = {
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
};
