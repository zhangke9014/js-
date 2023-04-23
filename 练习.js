const arr = [1, [2, 3, 4], [2, [3, [2, 3, 4]]]]

function unique_arr(arr) {
    const res = []
    const obj = {}
    arr.forEach((item) => {
        if (obj[item] === undefined) {
            obj[item] = true
            res.push(item)
        }
    })
    return res;
}


function flat_arr(arr) {
    const ans = []
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            ans.push(...flat_arr(item))
        }
        else {
            ans.push(item)
        }

    })
    return ans;
}

function my_instanceof(left, right) {
    let prototype = right.prototype;
    while (1) {
        if (left.__proto__ == null) {
            return false;
        }
        else if(left.__proto__ === prototype){
            return true;
        }
        left = left.__proto__;
    }

}


console.log(flat_arr(arr));
console.log(unique_arr(flat_arr(arr)));
console.log(my_instanceof([1],Number));
console.log(Array.prototype)

// setTimeout(() => {
//     console.log('setTimeout')
//   }, 1)
//   setImmediate(() => {
//     console.log('setImmediate')
//   })
  
//   Promise.resolve().then(()=>{
//     console.log('第一个回调函数：微任务1')  
//     setTimeout(()=>{
//       console.log('第三个回调函数：宏任务2')
//     },0)
//   })
//   setTimeout(()=>{
//     console.log('第二个回调函数：宏任务1')
//     Promise.resolve().then(()=>{
//       console.log('第四个回调函数：微任务2')   
//     })
//   },0)

Object.prototype.toString.call(null)
Object.prototype.toString.call(undefined)
