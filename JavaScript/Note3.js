// JavaScript笔记


// 1.代码块
// JS中的代码块，分组的作用，外部可见
/*
* prompt()可以弹出一个提示框，该提示框中会带有一个文本框，
* 	用户可以在文本框中输入一段内容，该函数需要一个字符串作为参数，
* 	该字符串将会作为提示框的提示文字
* 用户输入的内容将会作为函数的返回值返回，可以定义一个变量来接收该内容
*/


// 2.对象
/* 对象的分类：
    1.内建对象
        - 由ES标准中定义的对象，在任何的ES的实现中都可以使用
        - 比如：Math String Number Boolean Function Object....
    
    2.宿主对象
        - 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
        - 比如 BOM DOM
    
    3.自定义对象
        - 由开发人员自己创建的对象 */
// 属性默认值undefined
// 删除对象的属性 delete 对象.属性


// 3.属性名和属性值
/* 如果要使用特殊的属性名，不能采用.的方式来操作
需要使用另一种方式：
语法：对象["属性名"] = 属性值
在[]中可以直接传递一个变量 */
var obj =new Object();
obj["var"]="a";
var i="var";
console.log(obj[i]);
/* in 运算符
    - 通过该运算符可以检查一个对象中是否含有指定的属性
    如果有则返回true，没有则返回false
    - 语法：
    "属性名" in 对象 */
console.log("name" in obj);


// 4.对象字面量
// 使用对象字面量来创建对象
var obj1={};
/* 使用对象字面量，可以在创建对象时，直接指定对象中的属性
    语法：{属性名:属性值,属性名:属性值....} */
var obj2= {
    name:"Tom",
    age:18,
    isMale:true
};
console.log(obj2);


// 5.函数
/* - 函数 function 也是一个对象
- 函数中可以封装一些功能（代码），在需要时可以执行这些功能（代码）
- 使用typeof检查一个函数对象时，会返回function */

// 1.使用构造函数来创建一个函数对象(很少使用)
var fun =new Function("console.log('HelloWorld!');");
fun();
/* 2.使用 函数声明 来创建一个函数
    语法:
            function 函数名([形参1,形参2...]){
            } */
function fun2(){
    console.log("HelloJavaScript!");
}
fun2();
/* 3.使用 函数表达式 来创建一个函数
var 函数名 = function([形参1,形参2...]){
}; */
var fun3 = function(){
    console.log("HelloNode!");
};
fun3();

// 调用函数时，解析器也不会检查实参的数量
// 如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined

// 立即执行函数
/* (
    function(){
    }
)(); */
(
    function(a,b){
        console.log(a-b);
    }
)(95,45);


// 6.方法
/*
* 函数也可以称为对象的属性，
* 	如果一个函数作为一个对象的属性保存，
* 	那么我们称这个函数时这个对象的方法
* 	调用这个函数就说调用对象的方法（method）
* 
* 但是它只是名称上的区别没有其他的区别
*/
var obj3 = {
    name:"Lisa",
    age:25,
    getName:function(){
        return obj3.name;
    }
}
console.log(obj3.getName());


// 7.枚举对象中的属性
// 使用for...in 语句
/* 语法：
    for(var 变量 in 对象){
    } */
for(var n in obj2){
    console.log(n+":"+obj2[n]);
}


// 8.全局作用域
/*  - 直接编写在script标签中的JS代码，都在全局作用域
    - 全局作用域在页面打开时创建，在页面关闭时销毁
    - 在全局作用域中有一个全局对象window，
        它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用
    - 在全局作用域中：
        创建的变量都会作为window对象的属性保存
        创建的函数都会作为window对象的方法保存
    - 全局作用域中的变量都是全局变量，
        在页面的任意的部分都可以访问的到 */


// 9.变量的声明提前
/*
* 变量的声明提前
* 	- 使用var关键字声明的变量，会在所有的代码执行之前被声明（但是不会赋值），
* 		但是如果声明变量时不使用var关键字，则变量不会被声明提前
* 
* 函数的声明提前
* 	- 使用函数声明形式创建的函数 function 函数(){}
* 		它会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数
* 	   使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用	
*/
console.log(d);
var d=123;
fun4();
//函数声明，会被提前创建
function fun4(){
    console.log("我是一个fun函数");
}
//函数表达式，不会被提前创建
var fun5 = function(){
    console.log("我是fun2函数");
};


// 10.函数作用域
/*
* 函数作用域	
* 	- 调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁
* 	- 每调用一次函数就会创建一个新的函数作用域，他们之间是互相独立的
* 	- 在函数作用域中可以访问到全局作用域的变量
* 		在全局作用域中无法访问到函数作用域的变量
* 	- 当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用
* 		如果没有则向上一级作用域中寻找，直到找到全局作用域，
* 		如果全局作用域中依然没有找到，则会报错ReferenceError
* 	- 在函数中要访问全局变量可以使用window对象
*/
/*
* 在函数作用域也有声明提前的特性，
* 	使用var关键字声明的变量，会在函数中所有的代码执行之前被声明
* 	函数声明也会在函数中所有的代码执行之前执行
*/
/*
* 在函数中，不使用var声明的变量都会成为全局变量
*/
function fun7(){
    g=5;
}
/*
* 定义形参就相当于在函数作用域中声明了变量
*/
var f=23;
function fun6(f){
    console.log(f);
}
fun6();


// 11.this
/* 解析器在调用函数每次都会向函数内部传递进一个隐含的参数,
    这个隐含的参数就是this，this指向的是一个对象，
    这个对象我们称为函数执行的 上下文对象，
    根据函数的调用方式的不同，this会指向不同的对象
        1.以函数的形式调用时，this永远都是window
        2.以方法的形式调用时，this就是调用方法的那个对象
        3.当以构造函数的形式调用时，this就是新创建的实例 */
function fun8(){
    console.log(this.name);
}
var obj4 = {
    name:"Brack",
    getName:fun8
}
//以函数形式调用，this是window
fun8();
//以方法的形式调用，this是调用方法的对象
obj4.getName();


// 12.工厂方法创建对象
function createPerson(name,age,isMale){
    var obj = new Object();
    obj.name=name;
    obj.age=age;
    obj.isMale=isMale;
    obj.getName=function(){
        console.log(this.name);
    }
    return obj;
}
var obj5=createPerson("Mike",19,"男");
console.log(obj5);


// 13.构造函数
/*
    * 创建一个构造函数，专门用来创建Person对象的
    * 	构造函数就是一个普通的函数，创建方式和普通函数没有区别,
    * 	不同的是构造函数习惯上首字母大写
    * 
    * 构造函数和普通函数的区别就是调用方式的不同
    * 	普通函数是直接调用，而构造函数需要使用new关键字来调用
    * 
    * 构造函数的执行流程：
    * 	1.立刻创建一个新的对象
    * 	2.将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
    * 	3.逐行执行函数中的代码
    * 	4.将新建的对象作为返回值返回
    * 
    * 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。
    * 	我们将通过一个构造函数创建的对象，称为是该类的实例
    */
function Dog(name,age){
    this.name=name;
    this.age=age;
}
var dog=new Dog("陶狗",3);
console.log(dog);
// 使用instanceof可以检查一个对象是否是一个类的实例
console.log(dog instanceof Dog);


// 14.原型
/*
    * 原型 prototype
    * 
    * 	我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype
    * 		这个属性对应着一个对象，这个对象就是我们所谓的原型对象
    * 	如果函数作为普通函数调用prototype没有任何作用
    * 	当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，
    * 		指向该构造函数的原型对象，我们可以通过__proto__来访问该属性
    * 
    * 	原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，
    * 		我们可以将对象中共有的内容，统一设置到原型对象中。
    * 
    * 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，
    * 	如果没有则会去原型对象中寻找，如果找到则直接使用
    * 
    * 以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，
    * 	这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了
    */
function fun9(){
}
fun9.prototype.a=123;
var mc =new fun9();
console.log(mc.a);

/*
    * 原型对象也是对象，所以它也有原型，
    * 	当我们使用一个对象的属性或方法时，会现在自身中寻找，
    * 		自身中如果有，则直接使用，
    * 		如果没有则去原型对象中寻找，如果原型对象中有，则使用，
    * 		如果没有则去原型的原型中寻找,直到找到Object对象的原型，
    * 		Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined
    */
console.log(mc.__proto__.__proto__);
//使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("a" in mc);
//可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性
// 使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("a"));
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));


// 15.toString方法
// 修改某个实例的toString
dog.toString = function(){
    return "Dog[name="+this.name+",age="+this.age+"]";
}
// 修改Dog原型的toString
Dog.prototype.toString =function(){
    return "Dog[name="+this.name+",age="+this.age+"]";
}