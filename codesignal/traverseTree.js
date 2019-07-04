//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
// BFS
function traverseTree(t) {
    if(t == null) {
        return []
    }
    let values = []
    let check = [t]
    while (check.length > 0) {
        if(check[0].left)
            check.push(check[0].left)
        if(check[0].right)
            check.push(check[0].right)
        let node = check.shift()
        values.push(node.value)
    }
    return values
}
