<template>
  <div id="aaa">
    <button @click="aaa(123)">走你！</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    methods: {
      aaa: function (n) {
        let vm = this;
        let bbb = function () {
          console.log(vm);
          console.log(this);
        };
        bbb();
      }
    },
    mounted: function () {
      console.log(this);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  button {
    width: 120px;
    height: 50px;
    font-size: 24px;
  }
</style>
