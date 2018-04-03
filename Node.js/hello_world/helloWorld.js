// //使用Http服务器和客户端必须require('http')
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// //创建web服务，传入一个可选的回调函数(箭头函数的左边表示输入的参数，右边是输出方法(回调))
// const server = http.createServer((req,res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// //监听(连接创建的服务)
// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`);
// })


//一个最简单的express应用
// var express = require('../../node_modules/express');
// var app = express();
// app.get('/',(req,res) => {
//   res.send('Hello World')
// })
// app.listen(3000,() => {
//   //回调
//   console.log('app is listening at port 3000')
// })

//带参数的url
var express = require('../../node_modules/express');
var app = express();
app.get('/',(req,res) => {
  // res.send('Hello World')
  res.send('你要查询的是：'+ req.query.q)
})
app.listen(3000,() => {
  //回调
  console.log('app is listening at port 3000')
})