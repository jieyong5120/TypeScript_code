//大于
console.log(1 > 2)

//大于等于
console.log(2 >= 1)

//小于
console.log(1 < 2)

//小于等于
console.log(2 <= 1)

//等于
console.log(3 === 3)  //这行还没有报错  我发现左右相同不会提示
// console.log(3===4)  //ts智能 看出不可能相等,直接报错

let num1: number = 12
let num2: number = 24
console.log(num1 !== num2)

//不等于
console.log(5 !== 5)  //左右相同 不会提示
// console.log(3 !== 5)  ts智能 看出不可能相等,代码运行没有意义,直接报错 但可以使用变量定义数值

let num3: number = 25
let num4: number = 35
console.log(num3 !== num4)
