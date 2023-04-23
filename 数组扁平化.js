const { log } = console
const arr = [1, [1, 2, 3], [1, [2, [1, 2, 3]]]]
log(...arr)

function flat_array(arr) {
    const res = []
    arr.forEach((item) => { 
        if (Array.isArray(item)) {
            res.push(...flat_array(item))
        }
        else {
            res.push(item)
        }
    })
    return res;
}
function flat_array1(arr){
    let res = []
    arr.forEach((item)=>{
        if(Array.isArray(item)){
            res = res.concat(flat_array1(item))
        }else{
            res.push(item)
        }
        
    })
    return res
}
log(flat_array(arr))
log(flat_array1(arr))