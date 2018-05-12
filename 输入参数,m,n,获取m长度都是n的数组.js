/**
 * 输入参数，m,n，获取一个长度为m的都是n的数组，
 * 要求 ，不能用循环
 */

function getArray(m, n) {
  // return Array(m).fill(n)
  return Array.from({
    length: m
  }, (v, k) => n)
};

//也可以使用 递归
/**
 * 测试用例
 */
console.log(getArray(5, 3))
console.log(getArray('5', '3'))
console.log(getArray('zx', 'zx'))
console.log(getArray(null, undefined))
console.log(getArray(0, 0))

let arr = [1, 2, 4, 5]
let b = arr.fill(0, 2)
console.log(arr, b)