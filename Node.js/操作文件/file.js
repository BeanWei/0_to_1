// 异步读取(fs.readFile())和同步读取(fs.readFileSync())
const fs = require('fs')
//异步最后一个参数为回调函数，回调函数的第一个参数包含错误信息，
//这个参数会是null或undefined
fs.readFile('/TEST/test.js',function(err, data) {
  if (err) {
    return console.error(err)
  }
  console.log('异步读取：' + data.toString())
})
console.log('程序执行完毕')