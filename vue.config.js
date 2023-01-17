const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 基本路径
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置别名
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  }
};
