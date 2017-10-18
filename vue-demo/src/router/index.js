import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 单元测试  demo
import UnitList from '@/components/unittest/List'

// keeplive 测试
import KeepLive from '@/components/KeepLive'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: HelloWorld
		},
		{
			path: '/unitList',
			name: 'unitList',
			component: UnitList
		},
		{
			path: '/keeplive',
			name: 'keeplive',
			component: KeepLive,
			meta: {
				keepAlive: true
			}
		}
	]
})
