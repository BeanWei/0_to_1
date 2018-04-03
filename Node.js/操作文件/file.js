//异步：asynchronous
//同步：synchronous
// 异步读取(fs.readFile())和同步读取(fs.readFileSync())
const fs = require('fs')
//异步最后一个参数为回调函数，回调函数的第一个参数包含错误信息，
//这个参数会是null或undefined
// fs.readFile('../0_to_1/Node.js/TEST/test.js',function(err, data) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('异步读取：' + data.toString())
// })
// console.log('程序执行完毕')
// /*=========================================================*/
// //同步读取
// const data = fs.readFileSync('../0_to_1/Node.js/TEST/test.js')
// console.log('同步读取：' + data.toString())
// console.log('程序执行完毕')

//同步优先，异步靠边，回调垫底
//raedfile 里面执行的是异步，最后面的console是同步，故console先执行出来，
//readfileSync 全是同步，所以会按顺序执行

//选择：异步方法 => 速度快，性能高，没有阻塞。


/*=========================================================*/
//写入文件
// fs.writeFile('test.json',"{'test':'yes'}",{flag: 'a+'},(err) => {
//   if (err) throw new Error('发生异常了呢')
//   console.log('OK')
// })

/*=========================================================*/
//读取文件
let buf = new Buffer(1024)
fs.open('README.md','r+',(err, fd) => {
  if (err) throw err
  fs.read(fd, buf, 0, buf.length, 0, (err,bytes) => {
    if (err) throw err
    console.log('读取字节:' + bytes)
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString())
    }
  })
})