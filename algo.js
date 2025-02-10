function algo(num){
    if (num == 0) return num
    const arr = Array.from(num.toString())
    for (let i=arr.length-1;i>=0;i--){
        if (arr[i] == '0'){
            arr.pop()
        }else{
            return Number(arr.join(''))
        }
    }
}

console.log('1450 -> 145', algo(1450))
console.log('960000 -> 96', algo(960000))
console.log('1050 -> 105', algo(1050))
console.log('-1050 -> -105', algo(-1050))
console.log('0 -> 0', algo(0))