# 路径
  * os.path.dirname(os.path.dirname(os.path.abspath(__file__))) 这个是获取当前文件的上一级目录

  * sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  这个是把路径添加到系统的环境变量

  * os.path.abspath(os.path.join(os.path.dirname(__file__),".."))  #获取当前项目的根路径


# 正则
  * 去除特殊字符
    - re.sub(r'[\s+\.\!\/_,$%^*(+\"\')]+|[+——()?【】“”！，。？、~@#￥%……&*（）]+', '', sometext)
  * 去除html标签
    - re.sub(r'</?\w+[^>]*>', '', sometext) 

# python两个 list 获取交集，并集，差集的方法

1. 获取两个list 的交集
方法一:
a=[2,3,4,5]
b=[2,5,8]
tmp = [val for val in a if val in b]
print tmp
[2, 5]
方法二
print list(set(a).intersection(set(b)))

2. 获取两个list 的并集

print list(set(a).union(set(b)))

3. 获取两个 list 的差集

print list(set(b).difference(set(a))) # b中有而a中没有的      非常高效！
