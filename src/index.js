/**
 * 
 * @authors purelite
 * @date    2017-11-23 14:52:34
 * @version 1.0.0
 */

import scrollRecord from './modules/scroll-record.js'
import pageData from './modules/data.js'

const install = function (Vue) {
    Vue.directive('scroll-record', scrollRecord)
}

if (window.Vue) {
  Vue.use(install)
}

scrollRecord.install = install

export {scrollRecord, pageData}