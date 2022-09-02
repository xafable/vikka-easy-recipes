/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import {
    createWebHashHistory,
    createRouter
} from 'vue-router';

import { createStore } from 'vuex'
import VueCookies from 'vue-cookies'

// Import our custom CSS
import '../sass/app.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
//import RecipesComponent from "./components/RecipesComponent";
//import RecipeComponent from "./components/RecipeComponent";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


library.add(faUtensils,faAddressBook,faFacebook,faYoutube,faBlog)

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";



const options = {
    position: "top-left",
};





/**n
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import App from './app/App.vue';
import NavigationComponent from './app/components/NavigationComponent.vue';

import RecipeItemComponent from "./app/components/recipes/RecipeItemComponent.vue";
import RecipeDetailedComponent from "./app/components/recipes/RecipeDetailedComponent.vue";


import ModalComponent from "./app/components/ModalComponent.vue";
import LoginComponent from "./app/components/LoginComponent.vue";
import ExploreRecipes from "./app/components/ExploreRecipes.vue";
import DefButton from "./app/ui/DefButton.vue";
import RegisterComponent from "./app/components/RegisterComponent.vue";
import AuthComponent from "./app/components/AuthComponent.vue";

import HomePage from "./app/pages/Home.vue";


app.component('app', App);
app.component('modal-component', ModalComponent);
app.component('navigation-component', NavigationComponent);
app.component('recipe-detailed-component', RecipeDetailedComponent);
app.component('recipe-item-component', RecipeItemComponent);
app.component('explore-recipes-component', ExploreRecipes);
app.component('def-button', DefButton);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('login-component', LoginComponent);
app.component('auth-component', AuthComponent);
app.component('register-component', RegisterComponent);

app.component('home-page', HomePage);


app.config.globalProperties.app_url = 'http://vikka-easy-recipes'







/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/NavigationComponent.vue -> <example-component></example-component>
 */

 //Object.entries(import.meta.globEager('./!**!/!*.vue')).forEach(([path, definition]) => {
 //    app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
 //});

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

const routes = [
    { path: '/', component: HomePage },
    { path: '/recipe/:id', component: RecipeDetailedComponent },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// Create a new store instance.
const store = createStore({
    state () {
        return {
            user:{
                isLoggedIn: false,
                token: '11',
                userData: ''
            }

        }
    },
    mutations: {
        setLoggedInTrue (state) {
            state.user.isLoggedIn = true;
        },
        setToken(state,token) {
            state.user.token = token;
        },
        setUserData(state,data){
            state.user.userData = data;
        }
    }
})






app.use(router);
app.use(store);
app.use(VueCookies, { expire: '180d'});
app.use(Toast, options);


app.mount('#app');
