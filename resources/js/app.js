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





/**n
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import App from './components/App.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import RecipesComponent from "./components/RecipesComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";
import ExploreRecipes from "./components/ExploreRecipes.vue";
import DefButton from "./components/UI/DefButton.vue";


app.component('app', App);
app.component('modal-component', ModalComponent);
app.component('navigation-component', NavigationComponent);
app.component('recipes-component', RecipesComponent);
app.component('explore-recipes-component', ExploreRecipes);
app.component('def-button', DefButton);
app.component('font-awesome-icon', FontAwesomeIcon)


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
    { path: '/recipes', component: RecipesComponent },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

app.use(router);
app.mount('#app');
