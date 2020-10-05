let nums: number[] = [100, 200, 300, 600, 400, 500]

console.log(nums.length)  //数组也是对象,万物皆对象,数组内置对象的length属性

nums.push(700)  //在数组末尾添加元素  unshift方法在数组头部添加元素

console.log('输出数组添加元素之后新数组的长度:', nums.push(700))  //返回添加元素之后新数组的长度
console.log('输出数组尾部的元素:', nums.pop())  //把数组尾部添加的元素给删除了

console.log(nums)

/*
* push()方法  数组尾部添加元素
* unshift()方法  数组头部添加元素
*
* shift()方法  数组头部删除元素
* pop()方法  数组尾部删除元素
* */

/*
* forEach()方法  遍历数组  没有返回值
*
* forEach()方法的参数是一个函数,该函数是一个回调函数
*
* 回调函数参数:
*       第一个参数:数组的每一项
*       第二个参数:数组的索引
*       第三个参数:传递一个数组
*
* forEach()方法的执行过程:
*       遍历整个数组,为数组的每一项元素,调用一次回调函数  无法中间停止
*
* 疑问:不需要为回调函数的参数或返回值指定类型注解吗？
* 注意:此处的回调函数,是作为forEach方法的实参传入,不应该指定类型注解
*
* 源码forEach
*   forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
*
* forEach()方法,会根据当前数组的类型,自动推导回调函数中参数的类型
*
* 自己理解:自动推导确定回调函数的第一个参数,也是遍历数组的每一项,源码采用泛型定义函数的类型注解
*           第三个参数源码采用泛型数组
*
* 注意:回调函数中的参数可以用任意名称,并且,没有用到可以省略
* */
nums.forEach((item, index) => console.log('数组索引:' + index + ',===元素的值:' + item))

//只要一个满足条件就终止循环,返回true  若要返回false,必须每一个元素都不符合条件
let numsToSome: boolean = nums.some(item => item > 300)
console.log('some满足条件就终止循环:', numsToSome)

//只要一个不满足条件就终止循环,返回false  若要返回true,必须每一个元素都符合条件
let numsToEvery: boolean = nums.every(item => item > 300)
console.log('every不满足条件就终止循环:', numsToEvery)

//过滤数组,返回符合条件的新数组
let numsToFilter: number[] = nums.filter(item => item > 300);  //返回值使用快捷键生成,和idea快捷键一样
console.log('过滤数组:', numsToFilter)

//数组的map映射   对数组的每一项进行处理,返回处理后的一个新数组
let numsToMap: number[] = nums.map((item, index) => {

    if (index === 3) {  //对于数组的一些项元素做特殊处理
        return item
    }
    return item + 2
})
console.log('映射数组:', numsToMap)
