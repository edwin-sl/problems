//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    if(t === null)
        return true
    let textLeft = leftToRight(t.left)
    let textRight = rightToLeft(t.right)

    return textLeft === textRight
}

function leftToRight(n){
    if(n === null)
        return " "
    return n.value.toString() + leftToRight(n.left) + leftToRight(n.right)
}

function rightToLeft(n){
    if(n === null)
        return " "
    return n.value.toString() + rightToLeft(n.right) + rightToLeft(n.left)
}

let t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
let res = isTreeSymmetric(t)
console.log(res)