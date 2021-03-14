## 1.正则表达式
- regexp.exec(source) 返回匹配到的结果和输入输出等 第 0 个是整个正则匹配到的。从 1 开始，是|匹配到的某一种。

## 2.如何生成AST
构建AST的过程被称为语法分析。语法分析的思想主要有两种
- LL算法， 从左到右扫描，从左到右规约
- LR算法

四则运算语法分析
<!-- 表达式相当于一个加法表达式和一个结束符 -->
<Expression> ::=
	<AdditiveExpression><EOF>

<!-- 加法表达式相当于一个乘法表达式或两个加法表达式相加或两个加法表达式相减 -->
<AdditiveExpression> ::=
	<MultiplicativeExpression>
	|<AdditiveExpression><+><AdditiveExpression>
	|<AdditiveExpression><-><AdditiveExpression>

<!-- 乘（除）法表达式相当于一个数字或一个乘（除）法表达式乘以数字或一个乘（除）法表达式除以数字 -->
<MultiplicativeExpression> ::=
	<Number>
	|<MultiplicativeExpression><*><Number>
	|<MultiplicativeExpression></><Number>