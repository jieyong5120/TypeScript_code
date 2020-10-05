/*
* 交换两个变量的值
* num1=22
* num2=33
* */

let num1: number = 22
let num2: number = 33

let temp: number  //定义一个中间变量
temp = num1
num1 = num2
num2 = temp

console.log(num1)
console.log(num2)