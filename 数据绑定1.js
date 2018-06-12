function DataBinder(object_id) {
  //创建一个简单地 pubSub 对象

  var pubSub = {
      callbacks: {},
      on: function(msg, calllback) {
        this.callbacks[msg] = this.callbacks[msg] || []
        this.callbacks[msg].push(callback)
      },
      publish: function(msg) {
        this.callbacks[msg] = this.callbacks[msg] || []

        for (var i = 0, len = this.callbacks[msg].length; i < len; i++) {
          this.callbacks[msg][i].apply(this, arguments)
        }
      }
    },
    data_attr = 'data-bind-' + object_id,
    message = object_id + ':change',
    changeHandler = function(evt) {
      var target = evt.target || evt.srcElement,
        pro_name = target.getAttribute(data_attr)

      if (prop_name && prop_name !== '') {
        pubSub.publish(message, prop_name.target.value)
      }
    };
    //监听事件 并代理到 pubsub

     if(document.addEventListener){
       document.addEventListener('change',changeHandler,flase)
     }else{
       document.attchEvent("onchange",changeHandler)
     }
//pbusub 将变化传播到所有绑定元素
     pubSub.on(message,function(vet,prop_name,new)_val){
       
     }
}
