function containsDuplicates2(a) {
    return a.some((v, i, o) => o.includes(v, i + 1))
}
function containsDuplicates(a) {
    let values = {}
    for (v of a){
        if(values[v] !== undefined)
            return true
        values[v] = 1
    }
    return false
}

let res = containsDuplicates(
    [1, 2, 3, 1]
)
console.log(res)
