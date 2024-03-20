// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     host: "vue-social.to",
//     port: 8080, // You can use any port that is free and accessible on your system.
//     allowedHosts: "all", // This might be required to bypass host check, consider the security implications in production environments.
//   },
// });

// const { defineConfig } = require("@vue/cli-service");
// const fs = require("fs");
// const path = require("path");

// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     host: "vue-social.to",
//     port: 443, // Standard port for HTTPS
//     https: {
//       key: fs.readFileSync(path.join(__dirname, "vue-social.to-key.pem")),
//       cert: fs.readFileSync(path.join(__dirname, "vue-social.to.pem")),
//     }, // You can use any port that is free and accessible on your system.
//     allowedHosts: "all", // This might be required to bypass host check, consider the security implications in production environments.
//   },
// });
