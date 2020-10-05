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

//console是一个对象,而log是该对象提供的一个方法
console.log(Jay.name)  //调用对象的属性

Jay.sing('简单爱')  //调用对象的方法

/*
* 取值:
*   获取对象中的属性  称为:访问属性
*   获取对象中的方法并调用  称为:调用方法
* */