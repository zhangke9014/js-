const longestString = (s)=>{
    let arr = []
    let max = 0
    for(let i = 0;i<s.length;i++){
        while(arr.includes(s[i])){
            console.log(arr);
            arr.shift()
        }
        arr.push(s[i])
        max = Math.max(max,arr.length)
        console.log(arr,max);
    }
    return max
}

console.log(longestString('abcdeeffgddggfhfhfghf')); 