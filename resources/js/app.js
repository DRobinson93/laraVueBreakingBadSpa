/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import axios from "axios";

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        characters: null
    },
    getters: {
        getCharById: (state) => (id) => {
            if(state.characters === null){
                return {};
            }
            return state.characters.find(char => parseInt(char.id) === parseInt(id))
        },
        getCharByCategory: (state) => (category) => {
            if (!category) return state.characters;
            return state.characters.filter(char => char.category === category)
        }
    },
    mutations: {
        setChars(state, chars){
            state.characters = chars;
        }
    },
    actions: {
        fetchData(context) {
            axios
                .get('/api/character')
                .then(response => {
                    context.commit('setChars', response.data);
                });
        }
    }
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/*Vue.component('example-component', require('./components/ExampleComponent.vue').default);*/

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './views/App'
import Character from './views/Character'
import Home from './views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/character/:id',
            name: 'character',
            component: Character,
        },
    ],
});

const app = new Vue({
    store: store,
    el: '#app',
    components: { App },
    router,
});
