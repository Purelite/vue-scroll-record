//the route which need lazy load

const Index = resolve => {
    require.ensure(['../pages/Index.vue'], () => {
        resolve(require('../pages/Index.vue'))
    }, 'home')
}

const Page1 = resolve => {
    require.ensure(['../pages/Page1.vue'], () => {
        resolve(require('../pages/Page1.vue'))
    }, 'page1')
}
const Page2 = resolve => {
    require.ensure(['../pages/Page2.vue'], () => {
        resolve(require('../pages/Page2.vue'))
    }, 'page2')
}

let routeArray = [{
        path: '/',
        name: 'Index',
        component: Index,
    },{
        path: '/page1',
        name: 'Page1',
        component: Page1,
    },{
        path: '/page2',
        name: 'Page2',
        component: Page2,
    },
]

export default {
    routes: routeArray
}
