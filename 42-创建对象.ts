let people = {
    name: '周杰伦',
    gender: '男',
    height: 178,
    sing: function (song: string) {  //匿名函数
        console.log("演唱歌曲:", song)
    }
}

people.sing('稻香')


/*
* 如果一个函数是单独出现的,没有与函数关联,我们称为函数,否则称为方法
*
* 对象中的属性或方法,采用键值对的形式,因此,对象是无序键值对的集合
*
* TS对象结构化:对象有哪些属性和方法
* */