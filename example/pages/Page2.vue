<template>
  <div v-scroll-record="false">
    <div class="infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <router-link :to="{path:'/'}" tag="div" v-for="item in list" class="infinite-listitem">page2_{{ item }}</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {pageData} from '../../src/index.js'
export default {
  mixins: [pageData],
  pageData(){
    return {
      list:[],
      loading:false
    }
  },
  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  },
  methods:{
    loadMore() {
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
  components: {

  },
}
</script>
<style lang="sass" scoped>
  body{
    margin:0;

  }
  .infinite-list{
    background: #fff;
    .infinite-listitem{
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
    }
  }
</style>
