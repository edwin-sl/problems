//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {

    let values = []
    getChildrenFromIndex(t, values, k)
    return values[values.length - 1]
}

function getChildrenFromIndex(n, children, amount) {
    if(children.length === amount)
        return
    if(n.left != null) {
        getChildrenFromIndex(n.left, children, amount)
    }
    if(children.length === amount)
        return
    children.push(n.value)
    if(children.length === amount)
        return
    if(n.right != null) {
        getChildrenFromIndex(n.right, children, amount)
    }
}

let t = {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 5,
            "left": {
                "value": 4,
                "left": null,
                "right": null
            },
            "right": {
                "value": 6,
                "left": null,
                "right": null
            }
        }
    }
let k = 4
let res = kthSmallestInBST(t, k)
console.log(res)
