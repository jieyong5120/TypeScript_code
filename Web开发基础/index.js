//遍历数组
var nums = [100, 200, 300, 400, 500, 600, 700];
//使用for循环遍历数组,取出数组中的每一项
for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
//修改页面标题
document.title = '等你下课'; //DOM操作
//值 as 更具体的类型  有点像Java的变量类型向下转型
var htmlImageElement = document.querySelector('#img'); //类型断言
// htmlImageElement.src  就可以设置图片的src属性了  src是不是每一个元素共有的属性,需向下转型
/*
* 类型断言:手动指定更加具体（精确）的类型
* 使用场景:当你比ts更了解某个值的类型,并且需要指定更加精确的类型时
* 技巧:通过console.dir()打印DOM对象,来查看元素的类型
*
* 调用document.querySelector()通过id选择器获取DOM元素时,拿到的元素类型都是Element
* 因为无法通过id来确定元素的类型,所以该方法就返回一个宽泛的类型:元素(Element)类型
*
* 不管是h1和img标签  通过document.querySelector()获取的DOM元素都是元素(Element)类型
* */
var htmlDivElement = document.querySelector('.a');
htmlDivElement.classList.add('b', 'c');
console.log('打印类选择器集合:', htmlDivElement.classList);
htmlDivElement.classList.remove('b', 'c');
var containsToClass = htmlDivElement.classList.contains('b'); //返回值类型通过类型推论得到,可以省略不写
console.log('查看是否包含该类选择器:', containsToClass);
/*
* DOM操作:
*   classList获取到DOM元素class类选择器集合  有类似于Java中集合的方法
*
*   add  添加类选择器到集合中
*   remove  从集合中移除类选择器
*   contains  看集合中是否包含该选择器
* */
var htmlButtonElement = document.querySelector('#btn');
htmlButtonElement.addEventListener('click', clickEvent);
//事件的回调函数,平时都是使用匿名函数,今天学习使用了一下命名函数
function clickEvent(event) {
    console.log(this); //this指向按钮btn
    console.log('点击事件被触发了...');
    console.log(event); //打印事件对象
    var target = event.target; //通过类型断言获取到具体的DOM元素类型  其实this指向的就是该按钮,也就是DOM元素对象
    // target.style.fontSize = '30px'
    this.style.fontSize = '40px';
}
/*
* DOM操作:
*   事件对象:是事件处理程序(回调函数)的参数
*
* 删除事件:
*   说明:添加事件和移除事件时,事件处理程序是同一个,都是函数clickEvent
*   若想删除事件,就必须将事件处理程序作为命名函数,不能是匿名函数
*
*
* 若只需要触发一次,可以在添加事件时处理:
*   处理方式:传入第三个参数,将once属性设置为true  自动移除事件,在事件触发一次之后执行
* 第三个参数是一个对象 {once:true}
*
*
* 使用事件对象参数时,应该指定类型注解,否则,访问事件对象的属性时没有任何提示  但是我在用WebStorm有提示啊
* */
