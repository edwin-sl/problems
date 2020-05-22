// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {

    let i = 0
    let steps = 0

    while (i < c.length - 1) {
        if (c[i + 2] === 0) {
            i += 2
        } else if(c[i + 1] === 0) {
            i += 1
        } else {
            i = c.length
        }
        steps ++
    }
    return steps
}

let c = [0, 0, 1, 0, 0, 1, 0]
console.log(jumpingOnClouds(c))
