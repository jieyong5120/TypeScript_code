/*
* if else 语句练习
*
* 根据年龄做出判断
*   1.若年级小于18,就打印回家看熊出没
*   2.否则,就打印回家吃鸡
* */

let age: number = 18

if (age < 18) {
    console.log('回家看熊出没')
} else {
    console.log('回家吃鸡')
}

//需求 使用 三元运算符 实现 以上功能

console.log(age < 18 ? '回家看熊出没' : '回家吃鸡')