function my_instanceof(left, right) {
    let prototype = right.prototype
    while (1) {
        if (left.__proto__ === null) {
            return false
        }
        if (left.__proto__ === prototype) {
            return true
        }
        left = left.__proto__
    }
}

console.log(my_instanceof(Array, Object))
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
Array.prototype._map = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this))
    }
    return res
}

Array.prototype._forEach = function (callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

Array.prototype._filter = function (callback) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) && res.push(this[i])
    }
    return res
}

Array.prototype._every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false
        }
    }
    return true
}

Array.prototype._some = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true
        }
    }
    return false
}

Array.prototype._reduce = function (callback, ...args) {
    let pre = 0, start = 0
    if (args.length) {
        pre = args[0]
    } else {
        pre = this[0]
        start = 1
    }
    for (let i = start; i < this.length; i++) {
        pre = callback(pre, this[i], i, this)
    }
    return pre
}



arr._forEach((item) => {
    item = item * 2
    console.log(item);
})

console.log(arr._map((item) => {
    return item = item * 2
}))

console.log(arr._filter((item) => {
    return item > 5
}));

console.log(arr._some((item) => {
    return item >= 8
}));
console.log(arr._every((item) => {
    return item > 1
}));

console.log(arr._reduce((a, b) => {
    console.log(a, b);
    return a + b
}, 10));

function unique(arr) {
    console.log(arr);
    const res = [], obj = {}
    arr.forEach((item) => {
        if (obj[item] === undefined) {
            obj[item] = true
            res.push(item)
        }

    })
    return res
}
console.log(unique([1, 1, 1, 2, 3, 44, 44]));
console.log([...new Set([1, 1, 1, 2, 3, 44, 44])]);
console.log(Array.from(new Set([1,1,1,2,3,44,44])));