## 笔记
- Note1.md
- Note2.md

## 作业
1. 写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行编码:
- index.html
- 
2. 找出JavaScript标准中所有具有特殊行为的对象
- Array：Array 的 length 属性根据最大的下标自动发生变化。
- Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
- String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
- Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
- 模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
- 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
- bind 后的 function：跟原来的函数相关联