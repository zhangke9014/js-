
const {log} = console
const arr = [1, 1,1,1,2,3,4,2,2,0,0,0,0]
//新建一个空的数组和对象遍历原数组将第一次出现的元素加入新数组
function arr_unique(arr) {
    const res = []
    const obj = {}
    arr.forEach(item => {
        if (obj[item] === undefined) {
            obj[item] = true
            res.push(item)
        }

    })
    return res;
}
log(arr)
log(arr_unique(arr))
log( Array.prototype.slice.call({'0':'1','1':'b','2':'c',length:3}))

//2.Es6新增set和数组新方法Array.from()实现去重
log(Array.from(new Set(arr)))

//3.扩展运算符‘...’
log([...new Set(arr)])
//4.filter方法和indexOf方法
log(arr.filter((item,index)=>arr.indexOf(item,0)===index))

//5.对象数组

function unique_arr(arr){
    const res = []
    const map = new Map()
    arr.forEach((item)=>{
        if(!map.has(item.goodsId)){
            res.push(item)
            map.set(item.goodsId,1)
        }
    })
    return res
}
const arr1 = [{  
    "goodsId": "1",                               
    "quota": 12,                       
    "skuId": "1"                      
  },                                 
  {                                 
    "goodsId": "2",                   
    "quota": 12,                       
    "skuId": "2"                       
  },                                 
  {
    "goodsId": "1",
    "quota": 12,
    "skuId": "1"
  }]

  log(unique_arr(arr1))
  
  


