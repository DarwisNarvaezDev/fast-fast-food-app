import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css';
import 'animate.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(FloatingVue)
    .mount('#app')
