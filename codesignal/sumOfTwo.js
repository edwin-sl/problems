function sumOfTwo2(a, b, v) {
    for(x of a){
        let y = v - x
        if(b.includes(y))
            return true
    }
    return false
}

function sumOfTwo(a, b, v) {
    const x = a.reduce((ac, a1) => Object.assign(ac, {[v - a1]: 1}), {})
    for(y of b){
        if(x[y])
            return true
    }
    return false
}

let res = sumOfTwo(
    [1, 2, 3],
    [10, 20, 30, 40],
    42
)
console.log(res)
