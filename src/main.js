import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<app/>', // app is registered in vue-swipe-router which is used in router.js
})
