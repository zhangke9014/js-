function instance_of(left, right) {
    let prototype = right.prototype
    while (1) {
        if (left.__proto__ === null) {
            return false
        }
        else if (left.__proto__ === prototype) {
            return true
        }
        left = left.__proto__
    }
}
const set = new Set()
console.log(instance_of([1, 2], Array))
console.log(instance_of([1, 2], Object))
console.log(instance_of(set, Set))

var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
};
var func = counter.inc//.bind(counter);
func();
console.log(counter.count);  // 1



