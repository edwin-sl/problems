/*
We're going to store numbers in a tree. Each node in this tree will store a single digit (from 0 to 9), and each path from root to leaf encodes a non-negative integer.

Given a binary tree t, find the sum of all the numbers encoded in it.

Example

For
t = {
    "value": 1,
    "left": {
        "value": 0,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 1,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": null,
        "right": null
    }
}
the output should be
digitTreeSum(t) = 218.
There are 3 numbers encoded in this tree:

Path 1->0->3 encodes 103
Path 1->0->1 encodes 101
Path 1->4 encodes 14
and their sum is 103 + 101 + 14 = 218.
t = {
    "value": 0,
    "left": {
        "value": 9,
        "left": null,
        "right": null
    },
    "right": {
        "value": 9,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}
the output should be
digitTreeSum(t) = 193.
Because 09 + 091 + 093 = 193
 */

function digitTreeSum(t) {
    let numbers = []

    // deepNode(t, '', numbers)
    // console.log('NUMBERS -> ', numbers)
    // return numbers.reduce((acc, curr) => acc + curr, 0)
    return deepNodeSum(t, '')
}

function deepNode(node, nStr, numbers) {
    nStr += `${node.value}`
    if (node.left === null && node.right === null) {
        numbers.push(parseInt(nStr))
    } else {
        if (node.left !== null) {
            deepNode(node.left, nStr, numbers)
        }
        if(node.right !== null) {
            deepNode(node.right, nStr, numbers)
        }
    }
}

// optimized
function deepNodeSum(node, nStr) {
    nStr += `${node.value}`
    let sum = 0
    if (node.left === null && node.right === null) {
        sum += parseInt(nStr)
    } else {
        if (node.left !== null) {
            sum += deepNodeSum(node.left, nStr)
        }
        if(node.right !== null) {
            sum += deepNodeSum(node.right, nStr)
        }
    }
    return sum
}


const t = {
    "value": 0,
    "left": {
        "value": 9,
        "left": null,
        "right": null
    },
    "right": {
        "value": 9,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

console.log(digitTreeSum(t))
