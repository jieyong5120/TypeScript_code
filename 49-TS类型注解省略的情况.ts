interface IUser {
    name: String
}

//发生类型推论的场景
let age = 18  //没有给变量定义类型注解,则通过类型推论推断出类型注解
let songName: string = '七里香'

let people: IUser = {
    name: "周杰伦"
}

/*
* 说明:如果先声明变量后赋值,此时应该在声明变量时指定类型注解
* */
let num  //声明变量,没有给变量赋值,就不会有类型推论推断类型注解,而变量的类型是any,可以是任何类型
num = 19
num = '20'

function getSum(num1: number, num2: number) {  //返回值类型可以通过类型推论推断类型注解
    return num1 + num2
}

getSum(1, 2)

/*
* 发生类型注解的2种常见场景:
*       1.声明变量并初始化时
*       2.决定函数返回值
*
* 注意:这两种情况下,类型注解可以省略不写
*
* 推荐:能省略注解的地方,就省略
*
* 学习的时候,培养建立类型思维,出师了,就可以化繁为简
* */