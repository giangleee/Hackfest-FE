module.exports = {
    devServer: {
        allowedHosts: "all",
    },
};

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});