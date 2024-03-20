import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import OneSignalVuePlugin from "@onesignal/onesignal-vue3";
import GoogleSignInPlugin from "vue3-google-signin";
// import "./firebaseConfig";
//set axios baseUrl
axios.defaults.baseURL = "https://api.safepazz.test/";

const app = createApp(App);

// Provide axios instance globally
app.config.globalProperties.$http = axios;

//import router and use router
import router from "../router.js";
app.use(router);
app.use(OneSignalVuePlugin, {
  appId: "1e757f37-e14d-451c-84f5-a739132df4bb",
  allowLocalhostAsSecureOrigin: true,
});

app.use(GoogleSignInPlugin, {
  clientId:
    "667449470744-alcsc3dgcf2383m788sbtiusmp25fjv0.apps.googleusercontent.com",
});

//setup firebase
// navigator.serviceWorker
//   .register("./firebase-messaging-sw.js")
//   .then((registration) => {
//     console.log("Service Worker registered successfully:", registration);
//   })
//   .catch((error) => {
//     console.error("Service Worker registration failed:", error);
//   });
app.mount("#app");
