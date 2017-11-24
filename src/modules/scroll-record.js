/**
 * 
 * @authors purelite
 * @date    2017-11-23 14:58:26
 * @version $Id$
 */

import Store from './store.js'

let route

const store = new Store()

const scrollTo = (el, value) => {
    if(value === undefined) {
      return window.scrollY
    } 
    window.scrollTo(el.scrollX, value)
}

const scroll = () => {
    const top = scrollTo(event)
    store.setData(store.getUrl(route), top)
}

export default {
    inserted(el, binding, vnode) {
        const init = (to) => {
            route = to
            const currentUrl = store.getUrl(to)
            window.addEventListener('scroll', scroll, false)
            const top = store.getData(currentUrl)
            // binding.value 为false时不滚动
            if (top && (binding.value === true || binding.value === undefined)) {
                scrollTo(window, top)
            } else {
                scrollTo(window, 0)
            }
        }
        init(vnode.context.$route)
        vnode.context.$watch('$route', init)
    },
    unbind(_el, binding, vnode) {
        route = vnode.context.$route;
        window.removeEventListener('scroll', scroll, false)
    }
}
