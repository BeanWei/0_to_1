//------------最简单的爬虫实现----------------//
//模块=>
      //superagent:发起get或post请求
      //cheerio:css selector

const superagent = require('../../node_modules/superagent')
const cheerio = require('../../node_modules/cheerio')
const express = require('../../node_modules/express')

const app = express()

app.get('/', (req, res, next) => {
  superagent.get('https://cnodejs.org/')
    //这里不能用res.end
    .end((err,sres) => {
    if (err) {
      return next(err)
    }
    // res.send(sres.text)
    //将sres.text里面的html内容传给cheerio 并得到接口变量 给个名字-> $
    var $ = cheerio.load(sres.text)
    //定义一个空数组来存放爬取的结果
    var items = []
    //爬取dom属性为 id=topic_list下class=topic_title' 的所有内容
    //jQ的属性操作
    $('#topic_list .topic_title').each((idx, element) => {
      //将获取结果命名为$element
      var $element = $(element)
      //将所需要的push到数组中
      items.push({
        //attr() 设置或返回被选元素的属性值
        title: $element.attr('title'),
        href: $element.attr('href')
      })
    })
    res.send(items)
  })
})

//要访问就必须建立端口
app.listen(3000, () => {
  console.log('正在监听3000端口')
})

//结果
// [{"title":"【公测中】基于 Egg 的 CNode 社区",
// "href":"/topic/5aae1cc8f5dfc27d7ad98909"},
// {"title":"请不要再发薅羊毛帖子",
// "href":"/topic/5abda42674fe2526d62220d4"}]
