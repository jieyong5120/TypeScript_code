//找出数组中最大的值

let nums: number[] = [100, 200, 300, 600, 400, 500]

let max: number = nums[0]  //初始化默认赋值

for (let i = 1; i < nums.length; i++) {

    if (max < nums[i]) {
        max = nums[i]
    }
}

console.log('数组中最大的值:', max)


//使用sort排序
nums.sort((a, b) => b - a)  //箭头函数
console.log(nums)
console.log('数组中最大的值:', nums[0])