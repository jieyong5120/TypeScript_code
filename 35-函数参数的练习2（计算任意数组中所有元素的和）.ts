//函数参数的练习2（计算任意数组中所有元素的和）

function getSum(arr: number[]) {
    let sum: number = 0

    for (let i: number = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    console.log('计算数组中所有元素的和为:', sum)
}

getSum([1, 2, 3, 4])
getSum([5, 6, 7, 8])