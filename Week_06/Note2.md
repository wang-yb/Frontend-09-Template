# 非形式语言
平时交流用的语言，如中文、英语等等

# 形式语言（以下为由上到下单向包含关系）：
0- 型文法（无限制文法或短语结构文法）包括所有的文法。
1- 型文法（上下文相关文法）生成上下文相关语言。
2- 型文法（上下文无关文法）生成上下文无关语言。
3- 型文法（正规文法）生成正则语言。

# 产生式
产生式，即源程序经过词法分析和语法分析后得到的一系列符合文法规则的语句。

## 巴科斯-诺尔范式（Backus-Naur Form, BNF）是一种用于描述上下文无关文法的表现方式。
尖括号中的内容表示语法结构名
语法结构分成基础结构（Terminal Symbol，终结符）和需要用其它语法结构定义的复合结构（Nonterminal Symbol，非终结符）
引号和中间的字符表示终结符
可以有括号
* 表示重复多此
| 表示或
+ 表示至少一次
例：带括号的四则运算 BNF 产生式：
<code>
    <Expression>::=<AdditiveExpression><EOF>
    <AdditiveExpression>::=<MultiplicativeExpression>|
        <AdditiveExpression>"+"<MultiplicativeExpression>|
        <AdditiveExpression>"-"<MultiplicativeExpression>
    <MultiplicativeExpression>::=<PrimaryExpression>|
        <MultiplicativeExpression>"*"<PrimaryExpression>|
        <MultiplicativeExpression>"/"<PrimaryExpression>
    <PrimaryExpression>::=<Number>|
        "("<AdditiveExpression>")"
</code>

# 编程语言分类
- 按用途分：
数据描述语言：JSON HTML XAML SQL CSS
编程语言：C C++ C# Java Python Ruby Perl Lisp T-SQL Clojure Haskell JavaScript Go Scala

- 按表达方式分：
声明式语言：JSON HTML XAML SQL CSS Lisp Clojure Haskell
命令型语言：C C++ Java C# Python Ruby Perl JavaScript Go Scala

- 按类型转换规则分：
强类型语言：C C++ C# Java Python
弱类型语言：JavaScript VBScript PHP Perl Ruby

- 按类型确定时机分：
静态语言（编译时确定）：C C++ C# Java
动态语言（运行时确定）：Python JavaScript VBScript Ruby PHP Perl

# 编程语言性质
- 图灵完备性：
如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。或者说，如果能够描述所有可计算的问题，就是图灵完备的。

实现图灵完备性有两种思路：
1. 命令式——图灵机（Turing machine）:
 又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。
2. 声明式——lambda（递归）

# 动态与静态：
 动态对应运行时（用户设备或服务器上），静态对应编译时（开发者设备上）。

# 类型系统：
动态类型系统与静态类型系统：
1. 动态类型系统，在运行时存在的类型
2. 静态类型系统，只在编写代码时能够保存的类型系统（编译成机器码后类型信息丢失）

- 强类型与弱类型
强类型，类型转换必须是显式的
弱类型，类型转换可以是隐式的

- 复合类型
- 结构体
- 函数签名
- 子类型
- 泛型
- 逆变/协变

# 命令式编程语言的设计方式
1. Atom: Identifier Literal
2. Expression: Atom Operator Punctuator
3. Statement: Expression keyword Punctuator
4. Structure: Function Class Process Namespace
5. Program: Module Package Library


# 几种常见类型
- Number
一个符号位 + 11个指数位 + 52个精度位表示的双精度浮点数，一位为1bite，具体可参考：http://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html
- String
utf8: 默认一个字节表示一个字符； utf16: 默认两个字节表示表示一个字符
语法结构："abc"、'abc'、`abc` 
- null、undefined
null有变量、空值，null是关键字
undefined 未定义这个变量，是一个全局变量，不是关键字，一般采用void 0；来获取undefined的值；
- Object
1. 每一个对象都是唯一的，这与对象本身的状态无关；对象不是由状态决定的，状态是由对象决定的；我们会用状态来描述对象，状态的改变叫做行为（一定要注意，在实际业务中，要弄清楚真正被改变状态的对象是哪一个，并且在此过程中要尽量避免行为太过具体）；
2. 三大核心要素：state、identifier、behavior
3. 描述对象有分类、归类两种流派
归类：class 继承
分类：单继承，有一个基类 Object
4. 对象要素：属性（状态+行为）+prototype
属性：
key：string、symbol
value：
数据属性
访问器属性
API、语法
{}/./[]/object.defineProperty: 基于语法区创建、访问对象属性，以及改变属性的特征值；
object.create/object.setPrototyprOf/object.getPrototyprOf: 基于原型的描述对象的方法
new/class/extends：基于类的方式去描述对象
new/function/prototype(不建议用)
特殊对象
Function Object
Array Object
Host Object

Array：Array 的 length 属性根据最大的下标自动发生变化。
Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
bind 后的 function：跟原来的函数相关联