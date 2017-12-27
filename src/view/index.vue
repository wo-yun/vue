<template>
  <div id="index">
    <ul>
      <li class="lf" v-for="(val, index) in list" @click="jump(index)">{{ val }}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import util from '../util/index'

  export default {
    data () {
      return {
        list: ['小写金额转大写金额', 'vue的非prop特性', 'ccc', 'ddddddddddddddddddddddddd']
      }
    },
    methods: {
      jump (index) {
        switch (index) {
          case 0:
            util.go2("/aaa");
            break;
          case 1:
            util.go2("/bbb");
            break;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #index {
    ul {
      overflow: hidden;
      li {
        min-width: 100px;
        line-height: 36px;
        border: 1px solid #0C8EF1;
        font-size: 16px;
        color: #fff;
        background: #0C8EF1;
        border-radius: 4px;
        margin: 3px 5px;
        text-align: center;
        cursor: pointer;
        padding: 0 10px;
      }
    }
  }
</style>
