// Complete the plusMinus function below.
function plusMinus(arr) {
    let p = 0
    let m = 0
    let z = 0
    for(let n of arr){
        if(n > 0) p++
        else if(n < 0) m++
        else z++
    }
    const total = arr.length
    console.log(p / total)
    console.log(m / total)
    console.log(z / total)
    // return [p / total, m / total, z / total]
}

let res = plusMinus([-4, 3, -9, 0, 4, 1])
console.log(res)