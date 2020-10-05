//创建字符串枚举  枚举在JS中是没有的,是TS弥补JS的
enum Player {
    O = 'o',
    X = 'x'
}

//判赢数组  这是一个二维数组
let winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // 横
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // 竖
    [0, 4, 8], [2, 4, 6]	          // 斜
]

let cells = document.querySelectorAll('.cell');  //单元格
let gameBord = document.querySelector('#bord') as HTMLDivElement  //游戏面板DOM对象,直接先类型断言
let message = document.querySelector('#message') as HTMLDivElement  //获胜信息面板  之后要操作该DOM元素,先类型断言
let winner = document.querySelector('#winner') as HTMLParagraphElement  //获胜者
let restart = document.querySelector('#restart') as HTMLButtonElement  //重置游戏

//声明变量没有直接赋值,应当给予变量类型注解,不然变量的类型就是any了
let currentPlayer: Player  //存储当前玩家的变量  类型注解是枚举,可以省略,有类型推论推断类型注解

let steps: number  //记录已经下棋的次数  类型注解省略,通过类型推论推导类型注解

//将第一次游戏也看做是重新游戏  因此这段代码就不用了,给注释了
/*cells.forEach(item => {
    let cell = item as HTMLDivElement  //类型断言

    cell.addEventListener(
        'click',
        clickCell,
        //事件只会触发一次,防止单元格被多次触发
        {once: true}
    )
})*/

//棋盘中单元格事件处理程序  改为函数声明时,参数就要执行类型了,不然就是any类型了
function clickCell(event: MouseEvent): void {
    let target = event.target as HTMLDivElement  //类型断言
    target.classList.add(currentPlayer)  //添加当前玩家的变量,展示css样式

    // this.classList.add('x')  //通过this也可以给元素添加类名  还是用事件对象event  this指向被点击事件

    steps++  //每点击一次就添加一次数

    //调用判赢函数判断是否获胜
    let isWin = checkWin(currentPlayer);  //类型注解可以省略,有类型推论推断类型注解
    if (isWin) {

        message.style.display = 'block'  //面板展示玩家获胜
        winner.innerText = currentPlayer + ' 赢了！'  //根据不同玩家获胜,显示不同玩家获胜

        return //刻意终止后续代码  若玩家已经获胜,后续代码就没有必要执行了  还有当steps步数正好为9一方获胜时,不应当判断为平局
    }

    //判断平局  先判断是否获胜,再判断是否为平局
    if (steps === 9) {

        message.style.display = 'block'  //面板展示平局
        winner.innerText = ' 平局 '

        return //刻意终止后续代码  因为游戏已经结束
    }

    //三元表达式中没有使用字符串当判断,而采用枚举代替,字符串容易写错,在JS中没有枚举类型变量,而TS中弥补了这一缺陷
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X  //切换css样式,表示切换玩家下棋

    //处理下一个玩家的提示
    gameBord.classList.remove(Player.O, Player.X)  //可以移除多个类名
    gameBord.classList.add(currentPlayer)
}

restart.addEventListener('click', startGame)

//调用该函数来初始化游戏数据,第一次开始游戏
startGame()

//声明重置游戏处理函数
function startGame() {
    //1.隐藏获胜信息
    message.style.display = 'none'

    cells.forEach(item => {
        let cell = item as HTMLDivElement  //类型断言

        //2.清空棋盘
        cell.classList.remove(Player.O, Player.X)  //不管是x还是o都移除

        //3.移除单元格点击事件,重新给单元格绑定点击事件
        cell.removeEventListener('click', clickCell)  //代码不严谨,有的单元格不存在点击事件
        cell.addEventListener('click', clickCell, {once: true})  //重新给单元格绑定点击事件  事件只会触发一次,防止事件多次触发
    })

    //4.重置下棋次数
    steps = 0

    //5.重置默认玩家是x,默认下棋提示为x
    currentPlayer = Player.X  // currentPlayer: Player = Player.X  是错误写法,只有在声明变量时候可以使用类型注解,变量重新赋值的时候不可以使用
    gameBord.classList.remove(Player.O, Player.X)  //移除下棋提示  也就是和上一局游戏有关
    gameBord.classList.add(Player.X)  //新一局游戏开始,默认下棋提示为x

}

//封装判赢函数  参数传入当前玩家  返回值是布尔值
function checkWin(player: Player): boolean {  //函数返回值类型注解也可以省略,可以通过return推论

    //数组some方法返回布尔值  类型注解可以省略,有类型推论推断类型注解
    let isWin = winsArr.some((item) => {

        //这是定义了一个中间变量接收数值类型的值,也可以简化不用中间变量接收,主要学习一下定义变量写类型注解
        let cellIndex1: number = item[0]  //winsArr是二维数组,每一项item也是数组,其中数组的每一项是数值类型  类型注解也可以省略

        //这个中间变量没有简化,方便再次阅读代码
        let cell1 = cells[cellIndex1]  //获取到一个DOM元素,返回值类型是Element类型,在操作DOM元素具体的属性时需要类型断言,因此这里就不需要类型断言了

        if (hasClass(cell1, player) && hasClass(cells[item[1]], player) && hasClass(cells[item[2]], player)) {
            return true  //只要一个满足条件,就终止遍历数组winsArr,这就是some方法来遍历数组
        }

        return false
    })
    return isWin  //isWin是中间变量,可以优化代码,省略定义中间变量
}

//判断DOM元素是否包含某个类名
function hasClass(el: Element, name: string) {  //函数定义的返回值类型注解可以省略不写,通过类型推论推断类型注解
    return el.classList.contains(name)  //返回值类型是布尔值
}


/*
* 枚举知识点:
*   概念:组织有关联数据的一种方式
*   使用场景:当变量的值是几个固定的值时,应该使用枚举来实现
*   注意:JS中没有枚举,这是TS来弥补JS自身不足而新增的
*
* 使用枚举:枚举是一种类型,可以作为变量的类型注解
*
* 注意:枚举成员是只读的,也就是说枚举的成员可以访问,但是不可以赋值
*
* 枚举成员是有值的,默认是从0开始自增的数值
*
* 数字枚举:枚举成员的值为数字的枚举,就是数字枚举
*   当然也可以给枚举成员初始化值,没有初始化的枚举就是从初始化的枚举之后自增的
*
* 字符串枚举:枚举成员的值是字符串
*   注意:字符串枚举是没有自增长行为的,因此每一个成员都必须初始化
* */