import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './route-config.js'

Vue.use(VueRouter)
const router = new VueRouter(configRouter)


export default router
