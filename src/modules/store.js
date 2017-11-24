/**
 * 
 * @authors purelite
 * @date    2017-11-23 14:58:11
 * @version 1.0.0
 */

export default class Store {
    constructor() {
      this.data = {} //存储页面数据
      this.changeList = []
    }

    setData(url, data){
      this.changeList.forEach((fn) => fn(data, this.data[url], url))
      this.data[url] = data
    }

    getData(url){
      if(url){
        return this.data[url]
      }else{
        return this.data
      }
    }
    removeData(url){
      if(url){
        delete this.data[url]
      }else{
        this.data = {}
      }
    }

    change(fn) { //数据改变执行回调
        this.changeList.push(fn)
    }
    /**
     * @param  router
     */
    getUrl({path, query}) {
        const p = []
        Object.keys(query).forEach((v) => {
            if (v !== 'init') {
                p.push(`${v}=${query[v]}`)
            }
        })
        return [path, p.join('&')].join('?')
    }
}