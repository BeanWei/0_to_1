# 数组
-----------------------
### circular_counter：约瑟夫环
>约瑟夫环（约瑟夫问题）是一个数学的应用问题：已知n个人（以编号1，2，3...n分别表示）围坐在一张圆桌周围。从编号为k的人开始报数，数到m的那个人出列；他的下一个人又从1开始报数，数到m的那个人又出列；依此规律重复下去，直到圆桌周围的人全部出列。通常解决这类问题时我们把编号从0~n-1，最后结果+1即为原问题的解。
```python
def josepheus(int_list, skip):
    skip = skip - 1
    idx = 0
    len_list = len(int_list)
    while len_list > 0:
        idx = (skip+idx) % len_list
        print(int_list.pop(idx))
        len_list -= 1
a = ['1','2','3','4','5','6','7','8','9']
josepheus(a,3)
```

