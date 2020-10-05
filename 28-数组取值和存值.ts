//数组内容 煎饼 馒头 包子

let foods: string[] = ['煎饼', '馒头', '包子', '米饭', '饺子']

console.log('数组取值:', foods[3])  //数组取值

foods[3] = '皮蛋'  //数组修改值
console.log('数组取值:', foods[3])


//数组中的元素和索引一一对应的，可以通过索引获取某一个元素的值

//存值技巧 先获取要修改的值,然后再存值

foods[foods.length] = '油泼面'  //数组索引不存在,表示数组添加元素
console.log('数组取值:', foods[foods.length - 1])