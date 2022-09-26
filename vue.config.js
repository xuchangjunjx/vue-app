const { defineConfig } = require("@vue/cli-service");
function proxy(alias, url) {
  let key = `^/${alias}`;
  return {
    [key]: {
      target: url,
      changeOrigin: true,
      pathRewrite: {
        [key]: "",
      },
    },
  };
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/style/variables.scss";`,
      },
    },
  },
  devServer: {
    port: 8080,
    host: "127.0.0.1",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      ...proxy("api", `http://127.0.0.1:3000/api`),
    },
  },
});
