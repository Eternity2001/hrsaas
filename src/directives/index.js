// 管理自定义指令

export const imagerror = {
  inserted(dom, options) {
    // dom表示当前作用对象的dom
    // options是指令中的变量的解释
    dom.onError = function() {
      // dom可以注册error事件
      // dom.src = '默认图片' // src不能写死
      dom.src = 'options.value'
    }
  }
}
