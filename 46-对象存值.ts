//创建接口
interface User {
    name: string;  //对象中属性的注解
    gender: string;
    height: number;
    sing: (song: string) => void  //对象中方法的注解
}

let Jay: User = {
    gender: '男',
    height: 178,
    name: "周杰伦",
    sing: function (song: string) {
        console.log(this.name + "演唱了:", song)
    }
}

//先通过点语法获取到name属性,然后将新值赋值给该属性
Jay.name = '周董'  //修改name的属性的值

console.log(Jay.name)  //调用属性

//注意:设置的新值,也必须符合该属性的类型要求
//注意:几乎不会修改对象中的方法  修改的方法一定符合接口的规范要求