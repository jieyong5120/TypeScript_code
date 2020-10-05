/*
* 函数返回值的基本使用
*   1.指定返回值的类型  在声明函数的小括号后面,通过 : 类型注解 指定
*   2.指定返回值  使用return关键字来返回函数执行的结果
*
* 注意:返回值必须符合返回值类型的类型要求,否则会报错
* */

function getSum(arr: number[]): number {  //记住定义函数,有返回值要指定返回值类型
    let sum: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

console.log('计算数组中所有元素的和为:', getSum([1, 2, 3, 4]))
console.log('计算数组中所有元素的和为:', getSum([5, 6, 7, 8]))


/*
* return说明
*   1.将函数内部计算的结果返回
*   2.终止函数代码执行,即return 之后的代码不会执行
*   3.return 只能在函数中使用,否则会报错
*   4.return 可以单独使用（后面可以不跟内容）,用来刻意终止函数的执行
*       注意:如果函数没有返回值,默认函数的返回值的类型是void,可省略不写
* */