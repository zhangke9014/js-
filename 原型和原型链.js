1.
var A = function () { };
A.prototype.n = 1;
var b = new A();
A.prototype = {
    n: 2,
    m: 3
}
var c = new A();
console.log(b.n);
console.log(b.m);
console.log(c.n);
console.log(c.m);
const { log } = console
log(c.__proto__ === A.prototype) //true
log(A.__proto__ === Function.prototype)//true
log(Function.prototype.__proto__ === Object.prototype)//true
log(A.prototype.__proto__ === Object.prototype)//true



2.
var F = function () { };
Object.prototype.a = function () {
    console.log('a');
};
Function.prototype.b = function () {
    console.log('b');
}
var f = new F();
f.a();
//f.b();
F.a();
F.b();
log(f.__proto__ === F.prototype)
log(F.__proto__ === Function.prototype)
log(Function.__proto__ === Function.prototype)
log(Function.prototype.__proto__ === Object.prototype)
log(Object.__proto__ === Function.prototype)
log(F.prototype.__proto__ === Object.prototype)

