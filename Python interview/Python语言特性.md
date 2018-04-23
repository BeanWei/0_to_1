## python的函数参数传递
    * 类型属于对象而不是变量,对象分'可改变'和'不可改变两种',python中的String,tuples和numbers是不可改变的对象,而list,dict,set等是可以修改的对象

## @staticmethod 和 @classmethod
    -- 首先说说普通方法(不需要self)和实例方法(需要带self)
        普通方法只能被class调用，实例方法只能被类的实例调用
        静态方法和类方法能被class和类的实例调用
    * 静态方法：代码易读无需self参数，节约内存不用每个实例都实例化方法 -> 用途:限定namespace，表明该方法只有这个class会用到，不适合最为module level的函数
    * 类方法：主要用途是作为构造函数，作用就是有点像静态类，比静态类不一样的就是它可以传进来一个当前类作为第一个参数 -> 场景：定义一个类时，有时候需要保存与整个类有关但是不限定于具体实例的信息，或者需要与整个类相关的功能会使用到@classmethod。
    * 实例方法(simple)类方法(classmethod)静态方法(staticmethod)都写在class类内.所以他们唯一的区别是函数     的第一个参数绑定的对象不一样:
        实例方法(simple) def f(self, x): 的第一个参数 self 绑定的对象是实例对象 a, 第二个参数是 x ;
        类方法(classmethod) def f(cls, x): 的第一个参数 cls 绑定的对象是类 A , 第二个参数是 x ;
        静态方法(staticmethod) def f(x): 的第一个参数就是传参 x 自己.

## 类变量和实例变量
    * 类变量是可在类的所有实例共享的值(不单独分配给每个实例)
    * 实例变量是在类实例化之后,每个实例单独拥有的变量 

## python自省
    * 自省就是面向对象所写的程序在运行时能够获得对象的类型，最常用的由type(),isinstance(),dir(),getattr(),hasattr()

## 列表推导式和字典推导式
    * l = [ i for i in j ]
    * d = { key: value for (key, value) in iterable }

## python 下划线
    * 前单下划线:只是一种社区的约定,用来指定变量私有,不能用from module import * 导入,其他方面和公有的一样访问
    * 前双下划线:真正的私有变量,只能通过对象名._类名__xxx这样的方式或者类的实例.__dict__这两种方式访问
    * 前后双下划线:一种约定，python内部的名字，用来区别其他用户自定义的命名以防冲突，例如:__init__(),__del__(),__call__()这些特殊方法

## __new__ 和 __init__ 区别
    * __new__是一个静态方法,而__init__是一个实例方法.
    * __new__方法会返回一个创建的实例,而__init__什么都不返回.
    * 只有在__new__返回一个cls的实例时后面的__init__才能被调用.
    * 当创建一个新实例时调用__new__,初始化一个实例时用__init__.
    > ps:__metaclass__是创建类时起作用.所以我们可以分别使用__metaclass__,__new__和__init__来分别在类创建,实例创建和实例初始化的时候做一些小手脚.

## % 和 .format
    * .format 更便利可以同时传递一个变量和元组，% 只能对应一个参数

## 迭代器(generator)和生成器(yiled)
    Q:将列表生成式中[]改成() 之后数据结构是否改变？ 答案：是，从列表变为生成器
        >>> L = [x*x for x in range(10)]
        >>> L
        [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
        >>> g = (x*x for x in range(10))
        >>> g
        <generator object <genexpr> at 0x0000028F8B774200>

## *args 和 **kwargs
    * *args: 可以传递任意数量的参数
    * **kwargs: 允许使用没有事先定义的参数名
    * 混用: *args必须在**kwargs前面
    * 调用函数时也可以使用*和**语法,它可以传递列表(或者元组)的每一项并把它们解包.注意必须与它们在函数里的参数相吻合.当然,你也可以在函数定义或者函数调用时用*

## AOP(面向切面)和OOP(面向对象),python中的AOP利器->装饰器
    * AOP:在运行时动态的将代码切入到类的指定方法、指定位置上的编程思想就是面向切面编程
    * OOP:核心在于建模,将万物万事进行归类,抽象出属性和方法。也就是类和实例，一个类可以衍生出多个对象
    * Decorator 可以抽离出大量函数中与函数功能本身无关的雷同代码进行复用。在Python中较为经典的使用场景有插入日志、性能测试、事务处理等

## 鸭子类型 / 函数重载
> 当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子
    * 不关心对象是什么类型，只关心行为    
    * 函数重载 可变参数类型。可变参数个数。
     python不需要函数重载，有缺省参数 *args 和 **kwargs
     但可以实现python的函数重载：
        ```python
        class Writer:
            @staticmethod
            def write(output, content):
                #output对象只要实现了write方法就行
                output.write(content)

        #stringIO型
        output = StringIO.StringIO()
        Writer.write(output, 'hha')
        #file型
        output = open('output.txt', 'w')
        Writer.write(output, 'hha')
        ```

## 新式类和旧式类
    * MRO:方法解析顺序
    * 旧式类用于兼容 (MRO:深度优先)
    * python3中的类都是新式类 (MRO:广度优先)

## 单例模式
    * 创建唯一对象，单例模式设计的类只能实例
    > 比如:python中的import方法
    ```python
    # mysingleton.py
    class My_Singleton(object):
        def foo(self):
            pass

    my_singleton = My_Singleton()

    # to use
    from mysingleton import my_singleton

    my_singleton.foo()
    * 详解:http://python.jobbole.com/87294/

## python中的作用域
   > Python 中，一个变量的作用域总是由在代码中被赋值的地方所决定的。当 Python 遇到一个变量的话他会按照这样的顺序进行搜索：本地作用域（Local）→当前作用域被嵌入的本地作用域（Enclosing locals）→全局/模块作用域（Global）→内置作用域（Built-in）

## GIL线程全局锁
    * Python为了保证线程安全而采取的独立线程运行的限制,说白了就是一个核只能在同一时间运行一个线程.对于io密集型任务，python的多线程起到作用，但对于cpu密集型任务，python的多线程几乎占不到任何优势，还有可能因为争夺资源而变慢。
    * 解决办法就是多进程和下面的协程(协程也只是单CPU,但是能减小切换代价提升性能)

## 协程
    * 简单点说协程是进程和线程的升级版,进程和线程都面临着内核态和用户态的切换问题而耗费许多切换时间,而协程就是用户自己控制切换的时机,不再需要陷入系统的内核态.
    * Python里最常见的yield就是协程的思想!

## 闭包
    * 闭包: 当一个内嵌函数引用其外部作作用域的变量,我们就会得到一个闭包
    * 创建条件: 1.必须有一个内嵌函数 2.内嵌函数必须引用外部函数中的变量 3.外部函数的返回值必须是内嵌函数

## lambda函数
    * lambda函数：匿名函数,->函数式编程
    * [python中的意义]可以在表达式当中直接定义一个函数，而不需要将定义函数和表达式分开，这样有助于将逻辑用更紧凑的方式表达出来。

## 深浅拷贝
    * copy(): 简单的引用内存地址
    * deepcopy(): 深拷贝会将拷贝过来的重新创建一份独立的，每个元素的内存地址都与之前的不一样

## is 和 ==
    * is是对比地址, ==是对比值

## range and xrange
    * 都在循环时使用，xrange内存性能更好

## super
    * python中的super指的是MRO中的下一个类,类的继承和多重继承
    ```python
    def super(cls, inst):
        mro = inst.__class__.mro()
        return mro[mro.index(cls) + 1]
    ```
    两个参数 cls 和 inst 分别做了两件事： 
    1. inst 负责生成 MRO 的 list 
    2. 通过 cls 定位当前 MRO 中的 index, 并返回 mro[index + 1] 
    这两件事才是 super 的实质，一定要记住！ 
    MRO 全称 Method Resolution Order，它代表了类继承的顺序。


## Python垃圾回收机制
   * Python GC主要使用引用计数（reference counting）来跟踪和回收垃圾。在引用计数的基础上，通过“标记-清除”（mark and sweep）解决容器对象可能产生的循环引用问题，通过“分代回收”（generation collection）以空间换时间的方法提高垃圾回收效率。
    1 引用计数
    PyObject是每个对象必有的内容，其中ob_refcnt就是做为引用计数。当一个对象有新的引用时，它的ob_refcnt就会增加，当引用它的对象被删除，它的ob_refcnt就会减少.引用计数为0时，该对象生命就结束了。

    优点:
    简单
    实时性

    缺点:
    维护引用计数消耗资源
    循环引用

    2 标记-清除机制
    基本思路是先按需分配，等到没有空闲内存的时候从寄存器和程序栈上的引用出发，遍历以对象为节点、以引用为边构成的图，把所有可以访问到的对象打上标记，然后清扫一遍内存空间，把所有没标记的对象释放。

    3 分代技术
    分代回收的整体思想是：将系统中的所有内存块根据其存活时间划分为不同的集合，每个集合就成为一个“代”，垃圾收集频率随着“代”的存活时间的增大而减小，存活时间通常利用经过几次垃圾回收来度量。

    Python默认定义了三代对象集合，索引数越大，对象存活时间越长。

    举例： 当某些内存块M经过了3次垃圾收集的清洗之后还存活时，我们就将内存块M划到一个集合A中去，而新分配的内存都划分到集合B中去。当垃圾收集开始工作时，大多数情况都只对集合B进行垃圾回收，而对集合A进行垃圾回收要隔相当长一段时间后才进行，这就使得垃圾收集机制需要处理的内存少了，效率自然就提高了。在这个过程中，集合B中的某些内存块由于存活时间长而会被转移到集合A中，当然，集合A中实际上也存在一些垃圾，这些垃圾的回收会因为这种分代的机制而被延迟。