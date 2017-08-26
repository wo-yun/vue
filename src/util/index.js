/**
 * Created by Even on 2017/8/26.
 */
import router from '../router/index'

export default {
  /**
   *
   * @param url 请求的url
   * @param param 传递的参数
   *
   */
  go2:function (url,param) {
    let obj = {path:url,query:param};
    router.push(obj);
  }
}
