console.log("hola")

function cellCompete(states, days)
{
    for(var i = 0; i < days; i++){
        var backup = states.slice(0)
        for(var j = 0; j < states.length; j++){
            var left = backup[ j - 1] || 0
            var right = backup[ j + 1] || 0
            states[j] = left === right ? 0 : 1
        }
    }
    return states
}

// cellCompete([1,1,1,0,1,1,1,1], 2)

function generalizedGCD(num, arr)
{
    var min = Math.min.apply(null, arr)
    for(var gcp = min; gcp > 0; gcp--){
        if(arr.every(e => e % gcp === 0))
            break
    }
    return gcp
}

// generalizedGCD(5, [2,4,6,8,10])


function retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude)
{
    literatureText = literatureText.replace(/[^a-z]/gi, ' ')
    var words = literatureText.split(' ')
    var count = {}
    words.forEach(word => {
        word = word.trim().toLowerCase()
        if(wordsToExclude.indexOf(word) == -1 && word.length > 0)
            count[word] = count[word] + 1 || 0
    })

    var res = []
    var max = 0
    for(var word in count){
        if(count[word] === max)
            res.push(word)
        else if(count[word] > max){
            max = count[word]
            res = []
            res.push(word)
        }
    }

    return res
}

// retrieveMostFrequentlyUsedWords("Jack and Jill went to the market to buy bread and cheese. Cheese is Jack's and Jill's favorite food.", ['and', 'he', 'the', 'to', 'is'])

function reorderLines(logFileSize, logLines)
{
    var textLogs = []
    var numLogs = []
    logLines.forEach(line => {
        var separation = line.indexOf(' ')
        var id = line.slice(0, separation)
        var log = line.slice(separation + 1)
        if(isNaN(parseInt(log.replace(/ /g, '')))){
            textLogs.push(line)
        }else{
            numLogs.push(line)
        }
    })

    //TODO: fix problem with log size when comparing
    return textLogs.sort((line1,line2) => {
        var separation1 = line1.indexOf(' ')
        var id1 = line1.slice(0, separation1)
        var log1 = line1.slice(separation1 + 1)
        var separation2 = line2.indexOf(' ')
        var id2 = line2.slice(0, separation2)
        var log2 = line1.slice(separation2 + 1)

        var logCompare = log1.localeCompare(log2)
        return logCompare !== 0 ? logCompare : id1.localeCompare(id2)
    }).concat(numLogs)
}

// reorderLines(4, [
//     'mi2 jog mid pet',
//     'wz3 34 54 398',
//     'a1 alps cow bar',
//     'x4 45 21 7'
// ])


function isTreeSymmetric(t) {
    if(t === null)
        return true
    let left = t.left
    let right = t.right
    let textLeft = leftToRight(left)
    let textRight = rightToLeft(right)

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

// console.log(
//     isTreeSymmetric(t)
// )



// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let socks = {}
    ar.forEach((sock) => {
        if(socks[sock] === undefined)
            socks[sock] = 0
        socks[sock]++
    })
    return Object.values(socks).reduce((total, curr) => total + Math.floor(curr / 2), 0)
}

// console.log(
//     sockMerchant(7, [1,2,1,2,1,3,2])
// )



// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleys = 0
    let height = 0
    let up = true
    for(let d in s) {
        if(s[d] === 'U') {
            height++
            if (height === 0) {
                up = true
            }
        }else {
            if(height === 0){
                up = false
                valleys++
            }
            height--
        }
    }
    return valleys
}

// console.log(
//     countingValleys(8, 'UDDDUDUU')
// )



// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0
    let curr = 0
    while(curr < c.length){

    }

}




// Complete the braces function below.
function braces(values) {

    let valid = []
    values.forEach(value => {
        let chars = []
        let breaked = false
        for(let x in value){
            let c
            switch (value[x]) {
                case '(':
                case '{':
                case '[':
                    chars.push(value[x])
                    break
                case ')':
                    c = chars.pop()
                    if(c !== '('){
                        breaked = true
                    }
                    break
                case '}':
                    c = chars.pop()
                    if(c !== '{'){
                        breaked = true
                    }
                    break
                case ']':
                    c = chars.pop()
                    if(c !== '['){
                        breaked = true
                    }
                    break
            }
        }
        if(breaked){
            valid.push('NO')
        }else {
            valid.push('YES')
        }
    })
    return valid
}

// console.log(braces(
//     [
//         '{}[]()',
//         '{[}]'
// ]))

function removeKFromList(l, k) {
    if(l == null)
        return l
    while(l.value === k){
        l = l.next
    }
    let curr = l
    while(curr){
        if(curr.next.value === k){
            curr.next = curr.next.next
        }
    }
    l
}

// console.log(removeKFromList(
//     [3, 1, 2, 3, 4, 5], 3
// ))

function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    let res = []
    cost_per_minute.forEach((cost, index) => res.push(ride_time * cost + ride_distance * cost_per_mile[index]))
    return res
}


function fancyRide(l, fares) {
    const ubers = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']
    const money = 20
    let maxCost = 0
    let maxIndex
    fares.forEach((fare, index) => {
        let spent = l * fare
        if(spent > maxCost && spent <= money){
            maxCost = spent
            maxIndex = index
        }
    })
    return ubers[maxIndex]
}


// function nightRoute(city) {
//     let processed = {}
//     let currCity = 0
//     let lowestCost = (costs) =>
//         costs.reduce((min, curr, index) => curr < )
// }
//
// lowestCost = (costs, processed) => {
//
// }


function launchSequenceChecker(systemNames, stepNumbers) {
    let systems = {}
    systemNames.forEach((name, index) => {
        (name in systems) || (systems[name] = [])
        let system = systems[name]
        system.push(index)
    })
    console.log(systems)
    let valid = true
    // TODO: break foreach on false
    Object.values(systems).every(poss => {
        let count = -1
        return poss.every(pos => {
            if(stepNumbers[pos] > count){
                count = stepNumbers[pos]
            }else{
                valid = false
            }
            return valid
        })
    })
    return valid
}

// Optimized version
function launchSequenceChecker2(systemNames, stepNumbers) {
    let systems = {}
    return systemNames.every((name, index) => {
        (name in systems) || (systems[name] = -1)
        let system = systems[name]
        let count = stepNumbers[index]
        if(count > system){
            systems[name] = count
            return true
        }else{
            return false
        }
    })
}


console.log(launchSequenceChecker2(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111])
)


function almostIncreasingSequence(sequence) {
    let count = 0
    for(let i = 0; i < sequence.length - 1; i++){
        if(sequence[i] > sequence[i + 1])
            count++
    }
    return count < 2
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))


function companyBotStrategy(trainingData) {
    let count = 0
    let total = 0
    trainingData.forEach(d => {
        if(d[1] === 1){
            count++
            total += d[0]
        }
    })
    return (total / count) || 0
}

console.log(companyBotStrategy(
    [[3,1],
    [6,1],
    [4,1],
    [5,1]]
))
