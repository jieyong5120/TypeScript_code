//创建接口
interface User {
    name: string;  //对象中属性的注解
    gender: string;
    height: number;
    sing: (song: string) => void  //对象中方法的注解
}

let singer: User = {
    name: '林俊杰',
    gender: '男',
    height: 175,
    sing: function (song) {
        console.log(this.name + "演唱了:", song)
    }
}

singer.sing('不为谁而作的歌')  //调用方法


/*
* 直接在对象名称后面写类型注解的坏处  1.代码结构不够简洁  2.无法复用类型注解
*
* 接口:为对象的类型注解名称,并为你的代码建立契约来约束对象的结构
*
* 推荐:使用接口来作为对象的类型注解
* */