/*
Let the integer n be represented by digits a1, a2, ..., ak (the digits are listed from left to right in the order they appear in the decimal representation of n).
Define bi = |ai + 1 - ai|.
Construct the number from the digits b1, b2, ..., bk - 1 (in that order). Let's call the resulting value a digit distance number for n.
Example

For n = 2744, the output should be
digitDistanceNumber(n) = 530.

b1 = |a2 - a1| = |7 - 2| = 5
b2 = |a3 - a2| = |4 - 7| = 3
b3 = |a4 - a3| = |4 - 4| = 0
For n = 330, the output should be
digitDistanceNumber(n) = 3.

Formally, it is 03 but leading zeroes should be removed.

For n = 333, the output should be
digitDistanceNumber(n) = 0.
 */

function digitDistanceNumber(n) {
    let nStr = n.toString()
    let bStr = ''
    for(let i = 0; i < nStr.length - 1; i++) {
        bStr += `${Math.abs(nStr[i + 1] - nStr[i])}`
    }
    return parseInt(bStr)
}

console.log(digitDistanceNumber(2744))
