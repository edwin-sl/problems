//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function largestValuesInTreeRows(t) {
    if(!t)
        return []
    let largest = []
    let level = 0

    checkBranch(t, level, largest)
    return largest
}

function checkBranch(n, level, largest) {
    const max = largest[level] ? Math.max(largest[level], n.value) : n.value
    largest[level] = max
    if(n.left)
        checkBranch(n.left, level + 1, largest)
    if(n.right)
        checkBranch(n.right, level + 1, largest)
}
