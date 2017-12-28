<template>
  <div id="wx">
    <x-button @click.native="submit">微信分享</x-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XButton } from 'vux'
  import { WxConfig } from './wxConfig'
  import wx from 'weixin-js-sdk'

  export default {
    components: {
      XButton
    },
    data () {
      return {}
    },
    methods: {
      submit () {
//        alert (1111)
        this.wxConfig()
      },
      wxConfig() {
        let this_ = this;
        let obj = {
          appId     : this.signPackage.appId,
          timestamp : this.signPackage.timestamp,
          nonceStr  : this.signPackage.nonceStr,
          signature : this.signPackage.signature
        };
        WxConfig(obj);
        wx.ready(function(){
          //分享朋友圈
          wx.onMenuShareTimeline({
            title: '大美软装', // 分享标题
            link: 'http://member.idmei.cn/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://public.idmei.cn/151315940257264.png', // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          });
          //分享给朋友
          wx.onMenuShareAppMessage({
            title: '大美软装', // 分享标题
            desc: '大美软装-新零售创意家饰网络平台！', // 分享描述
            link: 'http://member.idmei.cn/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://public.idmei.cn/151315940257264.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          });
        });
      },
    },
    created() {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
