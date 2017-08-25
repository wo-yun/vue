<template>
  <div id="index">
    <ul>
      <li class="lf" v-for="val in list">{{ val }}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        list: ['aaa', 'bbb']
      }
    },

  }
</script>

<style>
  #index li {
    width: 100px;
    line-height: 36px;
    border: 1px solid #0C8EF1;
    font-size: 16px;
    color: #fff;
    background: #0C8EF1;
    border-radius: 4px;
    margin: 3px 5px;
    text-align: center;
    cursor: pointer;
  }
</style>
