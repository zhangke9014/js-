Function.prototype.myCall = function(context,...arg){
    context = context || window
    let key = Symbol()
    context[key] = this
    const res = context[key](...arg)
    delete context[key]
    return res
}

Function.prototype.myApply = function(context,arg){
    context = context || window
    let key = Symbol()
    context[key] = this
    const res = context[key](...arg)
    delete context[key]
    return res
}

Function.prototype.myBind = function(context,arg){
    context = context || window
    let fn = this
    return function newFun(...newArgs){
        if(this instanceof newFun){
            return new fn(...arg,...newArgs)
        }
        return fn.apply(context,[...arg,...newArgs])
    }
}
const a = {
    name:'zk',
    sayHello(){
        console.log(this);
        console.log(`hello!+${this.name}!!!`);
    }
}

function h(...arg){
    console.log(this.name);
    console.log(arg);
}
a.sayHello.call(a)
a.sayHello.myCall(a)
h.myCall({name:'lkm'},'a','aaaa')
h.myApply({name:'wrt'},['aaa','sssss','nihao'])
