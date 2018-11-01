// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    return ar.reduce((total, curr) => total + curr, 0)
}

let res = aVeryBigSum(
    [1000000001,
        1000000002,
        1000000003,
        1000000004,
        1000000005]
)
console.log(res)