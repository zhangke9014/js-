const s1 = new Promise((resolve,reject) => {
  console.log(123);//
  resolve();
}).then(()=>{
    console.log('999');
})

Promise.resolve().then(() => {
    console.log('第一个回调函数：微任务1')
    setTimeout(() => {
        console.log('第三个回调函数：宏任务2')
    }, 0)
})
setTimeout(() => {
    console.log('第二个回调函数：宏任务1')
    Promise.resolve().then(() => {
        console.log('第四个回调函数：微任务2')
    })
}, 0)

console.log(123213);



// console.log('1')
// new Promise((resolve, reject) => {
//         resolve('2')
//     }).then((res) => {
//         console.log(res)})

// setTimeout(() => {
//     console.log('3')
// })

// new Promise((resolve, reject) => {
//         resolve('4')
//     }).then((res) => {
//         console.log(res)
//     })

// console.log('5')

