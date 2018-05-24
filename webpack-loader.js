/**
 * 1. 从右到左，链式执行
 * 2. 固然也是希望每个 loader 只做该做的事，纯粹的事
 * 3. 不支持两个loader 之间 进行数据交流，标准loader 要求 强独立，以及输入什么就输出什么的可预见性。
 * 4. 利用缓存
 * 5. 异步
 */

var fs = require('fs')
module.exports = function(source) {
  //缓存
  this.cacheable()
  var callback = this.async
  //异步
  doSomeAsyncOperation(content, function(err, result) {
    if (err) return callback(err)
    callback(null, result)
  })
}
