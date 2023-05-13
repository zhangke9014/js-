function curry(fn) {
    return function curried(...args) {
        console.log('args',args);
        console.log('args.length:',args.length,'fn.length:',fn.length,);
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return function (...args2) {
                console.log('args2',args2);
                return curried(...args, ...args2)
            }
        }
    }
}
const fn = (a, b, c) => {
    return a + b + c
}
const add = curry(fn)
//console.log(add(1)(2)(3));
 console.log(add(1,2)(3));
// console.log(add(1)(2,3));


