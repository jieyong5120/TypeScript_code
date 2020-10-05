console.log('===代码执行===')

function work() {
    console.log('早上9点开始工作')
    paly()
    console.log('下午6点结束工作')
}

function paly() {
    console.log('早上9:30开始吃鸡')
    console.log('下午5:30结束吃鸡')
}

work()

console.log('===代码结束执行===')

/*
* 个人总结:
*   Step Out  跳出该方法
*       从方法体中跳出,该方法体已经被执行完毕
*
*   Drop frame  返回到当前方法的调用处
*       从方法体中跳出,返回到方法调用处,该方法体不一定被执行完毕,可能执行完毕,也可能执行完毕
* */