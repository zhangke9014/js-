// for (var i = 0; i < 3; i++) {
//     (function f() {
//         var j = i
//         setTimeout(() => {
//             console.log(j);
//         }, i * 1000)
//     })()
// }

//题目描述
    var b = 10;
    (function b() {
        b = 20
        console.log(b)
    })()

// NFE其实就简单两条规则，1.只能在函数体内访问，2.函数名变量可以理解为常量，不可变。
