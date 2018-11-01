// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let ld = 0
    let rd = 0
    //TODO: join in single 'for'
    for(let i = 0; i < arr.length; i++){
        ld += arr[i][i]
    }
    for(let i = arr.length - 1; i >= 0; i--){
        rd += arr[arr.length - i - 1][i]
    }

    return Math.abs(ld - rd)
}

let res = diagonalDifference(
    [[11, 2, 4],
    [4, 5, 6]]
)
console.log(res)