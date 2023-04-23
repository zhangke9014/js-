const  { log } = console
log(typeof(null))
log(Number.__proto__===Function.prototype)
log(Function.prototype.__proto__===Object.prototype)
log(Object.__proto__===Function.prototype)