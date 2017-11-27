# vue-scroll-record

####vue-scroll-record是一个记录Vue SPA应用页面滚动位置,并且能够还原页面数据的插件

##用法
```bash
npm install vue-scroll-record -D
```
在项目的index.js文件中引入

```javascript
import scrollRecord from 'vue-scroll-record'
Vue.use(scrollRecord)
```

在需要用的页面文件当中,按照如下写法

```JavaScript
<template>
  <div v-scroll-record>
     vue-scroll-record 指令是用来记录页面滚动位置
  </div>
</template>

<script>
import Vue from 'vue'
//pageData 用来存储当前页面数据
import {pageData} from 'vue-scroll-record'
export default {
  mixins: [pageData],
  pageData(){
    return {
      list:[],
      loading:false
    }
  },
  }
</script>
```