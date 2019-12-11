/**
 * 题目要求
 */
// var DI = function(dependency) {
//   this.dependency = dependency
// }

// // Should return new function with resolved dependencies
// DI.prototype.inject = function(func) {
//   // Your code goes here
// }

/**
 * 实现
 */

var DI = function(dependency) {
  this.dependency = dependency
}

// Should return new function with resolved dependencies
DI.prototype.inject = function(func) {
  console.log(func.toString())
  var deps = /^[^(]+\(([^)]+)/.exec(func.toString())

  console.log(1, deps)

  //  构建参数绑定数组
  deps = deps
    ? deps[1].split(/\s?,\s?/).map(
        function(dep) {
          return this.dependency[dep]
        }.bind(this)
      )
    : []

  // 通过apply将依赖参数传入函数
  return function() {
    return func.apply(this, deps)
  }
}

/**
 * 测试例子
 */

// 要注入的依赖
var deps = {
  dep1: function() {
    return 'this is dep1'
  },
  dep2: function() {
    return 'this is dep2'
  },
  dep3: function() {
    return 'this is dep3'
  },
  dep4: function() {
    return 'this is dep4'
  }
}

// 新建一个“注射器”
var di = new DI(deps)

// 注射
var myFunc = di.inject(function(dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ')
})

console.log(myFunc())

//ljtest
