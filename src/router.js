import Vue from 'vue'
import Router from 'vue-router'

/**
 * NOTICE: 
 * vue-swipe-router has not been translated to es5, 
 * you can add it to babel-loader include in build/webpack.base.conf.js,
 * as in line 38, resolve('node_modules/vue-swipe-router')
 * 
 * vue-swipe-router暂未转化为es5模块，
 * 因此目前使用需要加到babel-loader的include中，
 * 请参考build/webpack.base.conf.js中的使用，38行，resolve('node_modules/vue-swipe-router')
 */
import swipeRouter from 'vue-swipe-router'

import Pages from '@/pages'

Vue.use(Router)
Vue.use(swipeRouter)

export default new Router({
	routes: [
		{
			path: '/',
			component: Pages.Home,
		},
		{
			path: '/detail',
			component: Pages.Detail,
		},
	]
})
