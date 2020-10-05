//函数返回值的练习2（得到任意两个数中的最大值并返回）

function getMax(num1: number, num2: number): number {

    return num1 > num2 ? num1 : num2
}

console.log('得到任意两个数中的最大值:', getMax(2, 3))
console.log('得到任意两个数中的最大值:', getMax(6, 5))