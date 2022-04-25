import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css';
const app = createApp(App)
app.use(router)
app.mount('#app')


AOS.init({
    easing: 'ease-in-out-sine',
    duration: 450,
    delay: 5,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;
    next();
});