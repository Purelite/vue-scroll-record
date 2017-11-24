/**
 * 
 * @authors purelite
 * @date    2017-11-23 14:58:01
 * @version 1.0.0
 */

import Vue from 'vue'
import Store from './store.js'

const store = new Store()


const init = function ($route) {
    if (typeof this.$options.pageData != 'function') {
        throw 'The "pageData" option should be a function that returns a per-instance value in component definitions.'
    }
    this.$options.pageData.$url = store.getUrl($route)
    var recordData = store.getData(this.$options.pageData.$url)
    if ($route.params._init === undefined && recordData) {
        return recordData
    }
    /**
     * TODO refresh
     */

    return this.$options.pageData.call(this)
}

const saveData = function () {
    var data = this.$options.pageData()
    var newData = {}
    Object.keys(data).forEach((k) => {
        newData[k] = this.$data[k]
    })
    newData.dataSaved = true;
    store.setData(this.$options.pageData.$url, newData)
}

export default {
    data() {
      return init.call(this, this.$route);
    },
    destroyed() {
      saveData.call(this)
    },
    mounted(){
        
    },
    watch: {
        $route(to, from) {
            saveData.call(this)
            Object.assign(this.$data, init.call(this, to)) //重置路由数据
        }
    }
}
