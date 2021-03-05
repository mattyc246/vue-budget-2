const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "",
  configureWebpack: {
    plugins: [new GenerateSW()],
  },
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Accounts | Matthew Cross";
      return args;
    });
  },
};
