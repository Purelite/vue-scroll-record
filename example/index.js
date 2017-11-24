/**
 * 
 * @authors purelite 
 * @date    2017-11-23 15:56:35
 */

import 'es6-promise/auto'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import router from './router/router.js'
import infiniteScroll from 'vue-infinite-scroll'
import {scrollRecord} from '../src/index.js'
import 'babel-polyfill'

Vue.use(scrollRecord)
Vue.use(infiniteScroll)


let app = new Vue({
    el: '#app',
    router: router,
    render(h) {
        return (
            <div>
                <router-view class="main-view"></router-view>
            </div>
        )
    }
})
