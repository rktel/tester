import Vue from 'vue'

import App from '../src/App.vue'

Meteor.startup(() => {
    new Vue({
        render: h => h(App)
    }).$mount('app')
});