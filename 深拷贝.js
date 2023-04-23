function clone(target, map = new Map()) {
    if (typeof (target) === 'object') {
        let CloneTarget = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set( target,CloneTarget)
        for (const key in target) {
            CloneTarget[key] = clone(target[key], map)
        }
        return CloneTarget
    } else {
        return target
    }

}

let a = 1;
let b = {
    a: 1,
    b: 2,
    c: [1, 2, 3]
}
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target
console.log(clone(a));
console.log(clone({}));
console.log(clone(target));
