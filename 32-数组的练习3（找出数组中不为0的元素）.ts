// 找出数组中不为0的元素

let nums: number[] = [100, 200, 0, 300, 600, 0, 400, 1000, 0, 900, 500, 700, 800]

let newArr: number[] = []

for (let i = 0; i < nums.length; i++) {

    if (nums[i] !== 0) {
        newArr[newArr.length] = nums[i]
    }
}
console.log('数组中不为0的元素组成的数组:', newArr)

// newArr = []  //这种写法不对,这样会创建一个新的空数组
newArr.length = 0  //将数组长度置为空  上面追加的数据清除了,还原初始化状态

//方式二
for (let i = 0; i < nums.length; i++) {

    if (nums[i] !== 0) {
        newArr.push(nums[i])  //push()方法  改变原数组,追加数据
    }
}
console.log('数组中不为0的元素组成的数组:', newArr)