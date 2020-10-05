//变量isVip表示:是否是会员
let isVip: boolean = false

//如果是会员,就看完整电影
if (isVip) {
    console.log('看完整电影')
} else {  //条件不满足
    console.log('试看5分钟')
}

//else语句必须配合if语句使用