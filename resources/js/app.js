require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'))
Vue.component('task-component', require('./components/TaskComponent.vue'))

const app = new Vue({
    el: '#app'
});