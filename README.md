# 练习：猜数字
## 练习目标

- 练习基本的编写测试用例（Test Case）的能力
- 练习测试驱动开发（TDD）

## 练习要求

用TDD（Test Driven Development）开发一个简单的猜数字游戏：

- 游戏开始后，系统会随机给出四个不重复的数字。由用户输入自己猜测的四个数字。
- 如果数字猜对而且位置也对，就是1一个A。
- 如果数字猜对但位置不对，就是一个B。
- 返回结果是如“2A1B”这样的字串。

例如：

- 系统给出"1234"，用户输入"1234"
- 返回"4A0B"
- 系统给出"1234"，用户输入"4321"
- 返回"0A4B"

### 输出结果

将个人练习代码库地址提交到教练指定的位置。

代码库需包含：

1. 说明如何运行和测试代码的README.md文件
2. 运行结果截图的result.png文件

## 如何开始：

1. `git clone https://github.com/tws-practice/ut-workshop`
2. 修改`src`目录下的`main.js`和`main-test.js`文件，打开`run.html`运行测试，完成练习。

## 学习资源

- 测试驱动开发(Test-Driven Development)：[https://baike.baidu.com/item/TDD/9064369](https://baike.baidu.com/item/TDD/9064369)
- Jasmine：[https://jasmine.github.io/2.0/introduction.html](https://jasmine.github.io/2.0/introduction.html)


