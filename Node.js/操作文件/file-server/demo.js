//Node静态文件服务器

//常规开头 先建立require('http')
const http = require('http')
//引入url模块
const url = require('url')
//文件读取中要适配所有类型文件不单单是text/plain，所以这里需要引入mime模块
const mime = require('mime')
//文件读取导入fs模块，url分析导入url模块，读取路径导入path模块
const fs = require('fs')
const Url = require('url')
const path = require('path')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req,res) => {
  //不响应favicon请求
  if(req.url == '/favicon.ico') return
  //获取URL
  let pathname = path.join(__dirname,Url.parse(req.url).pathname)
  //url解码，避免中文路径出错
  pathname = decodeURIComponent(pathname)
  console.log(pathname) 
  /*判读文件是否是文件夹，是则返回列表，否则读取内容*/
  //stat方法
  //是文件夹
  if(fs.statSync(pathname).isDirectory()) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    fs.readdir(pathname, (err,files) => {
      //插入dom
      res.write('<ul>')
      //遍历文件夹
      files.forEach((item) => {
        //通过遍历出的文件名构造文件夹下的各个文件访问的url
        let link = path.join(Url.parse(req.url).pathname,item)
        //构造li标签，item为文件名
        res.write(`<li><a href="${link}">${item}</a></li>`)
      })
      res.end('</ul>')
    })  
  }
  //不是文件夹
  else{
    //以二进制方式(binary)读取文件
    fs.readFile(pathname, 'binary', (err,data) => {
      if(err) {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end(JSON.stringify(err))
        return false
      }
      res.writeHead(200, {
        'Content-Type': `${mime.lookup(pathname)};charset:utf-8'`
      })
      res.write(data, 'binary')
      res.end()
    })
  }
})

server.listen(port,hostname,() => {
  console.log(`服务器运行在http://${hostname}:${port}`)
})