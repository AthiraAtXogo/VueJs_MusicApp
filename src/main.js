
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import veeValidatePlugin from './includes/validation'
import {auth} from './includes/firebase';
import Icon from './directives/icon'
import i18n from './includes/i18n'
import GlobalComponents from './includes/_globals';
import progressBar from './includes/progress-bar'
import {registerSW} from 'virtual:pwa-register';

import './assets/base.css';
import './assets/main.css';
import 'nprogress/nprogress.css'


registerSW({immediate:true});

let app;

progressBar(router)

auth.onAuthStateChanged(()=>{
    if(!app){
        app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(veeValidatePlugin)
app.use(i18n)
app.use(GlobalComponents)
app.directive("icon",Icon)


app.mount('#app')
    }
})
