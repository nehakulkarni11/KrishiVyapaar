import { translatePage } from "./app-functions/translate.js";
import { toggleLoginLogout } from "./app-functions/auth.js";
import { initialStatus } from "./app-functions/realtime-data.js";

const translateBtn = document.getElementById("translate-btn");
const infoBtn = document.getElementById("info-icon");
// const loginBtn = document.getElementById("login-icon");

// events
translateBtn.addEventListener("click", translatePage);
infoBtn.addEventListener("click", () => {
    window.open("https://pmkisan.gov.in/", "_blank");
});
// loginBtn.addEventListener("click", toggleLoginLogout);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then((registration) => {
                console.log(
                    "Service Worker registered with scope:",
                    registration.scope
                );
            })
            .catch((error) => {
                console.error("Service Worker registration failed:", error);
            });
    });
}

initialStatus();
