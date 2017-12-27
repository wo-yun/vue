<template>
  <div id="bbb">
    <div id="app">
      <my-comp data-title="learn vue" class="mycls" style="color:red;"></my-comp>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    components: {
      'my-comp': {template: '<div>我是组件</div>'}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
