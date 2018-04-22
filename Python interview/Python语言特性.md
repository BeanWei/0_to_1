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