//此处的花括号 {} 表示对象的类型注解  建立一种契约,约束对象的结构
let people: {
    name: string;  //对象中属性的注解
    gender: number;
    height: number;
    sing: (song: string) => void  //对象中方法的注解
}


//此处的花括号 {} 表示ts中的对象  去除let防止变量的重复声明
people = {
    name: '周杰伦',
    gender: 41,
    height: 178,
    sing: function (song) {
        console.log(this.name + "演唱了:", song)
    }
}

people.sing('稻香')


/*
* 对象的类型注解    语法有点类似于对象自身的语法
*       建立一种契约,约束对象的结构
*
* 注意:
*   键值对中的值是类型,因为这是对象的类型注解
*   多个键值对之间使用分号 隔开,并且分号可以隔开
*
*
* 对象方法的类型注解:
*   关键点 1.参数 2.返回值
*       箭头(=>) 左边的小括号内容:表示方法的参数及参数的类型注解
*       箭头(=>) 右边的小括号内容:表示方法的返回值及返回值的类型注解
* */


//简写  对象类型注解不能够复用,也不直观
let singer: {
    name: string;  //对象中属性的注解
    gender: string;
    height: number;
    sing: (song: string) => void  //对象中方法的注解
} = {
    name: '林俊杰',
    gender: '男',
    height: 175,
    sing: function (song) {
        console.log(this.name + "演唱了:", song)
    }
}

