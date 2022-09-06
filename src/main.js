import { createApp } from 'vue'
import App from './App.vue'
import router from './router/route.js'
import "./asset/css/global.css";
import "./asset/css/glax.css";
import './registerServiceWorker'

const app = createApp(App).use(router).mount('#app');
window.addEventListener("scroll", function () {
    var y = window.window.pageYOffset;
    if (y > 200) {
        if (app.header === true) {
            return;
        } else {
            app.header = true;
        }
    } else {
        if (app.header === false) {
            return;
        } else {
            app.header = false;
        }
    }
})
