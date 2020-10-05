//求数组中所有元素的和

let nums: number[] = [100, 200, 300, 400, 500]

let sum: number = 0

for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
}

console.log(sum)