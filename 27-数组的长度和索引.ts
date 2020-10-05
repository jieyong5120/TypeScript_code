//数组内容 煎饼 馒头 包子

let foods: string[] = ['煎饼', '馒头', '包子', '米饭', '饺子']

console.log('数组长度:', foods.length)

for (let i: number = 0; i < foods.length; i++) {
    console.log('数组每一项:', foods[i])
}

//数组中元素的序号：称为索引  数组中的元素和索引一一对应

//数组的长度length和最大索引之间有什么关系  最大索引：length - 1