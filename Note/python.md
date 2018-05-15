# 路径
  * os.path.dirname(os.path.dirname(os.path.abspath(__file__))) 这个是获取当前文件的上一级目录

  * sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  这个是把路径添加到系统的环境变量

  * os.path.abspath(os.path.join(os.path.dirname(__file__),".."))  #获取当前项目的根路径


# 正则
  * 去除特殊字符
    - re.sub(r'[\s+\.\!\/_,$%^*(+\"\')]+|[+——()?【】“”！，。？、~@#￥%……&*（）]+', '', sometext)
  * 去除html标签
    - re.sub(r'</?\w+[^>]*>', '', sometext) 