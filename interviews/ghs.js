function degreeOfArray(input) {
    // now we can read/parse input
    const args = input.split('\n')
    const t = args[0]
    const n = args[1].split(' ')

    let maxDegree = 0
    let degrees = n.reduce((d, e, i) => {
        if(!d[e]){
            d[e] = {
                first: i,
                degree: 0
            }
        }
        let optDegree = d[e]
        optDegree.last = i
        let tmpDegree = ++optDegree.degree
        if(tmpDegree > maxDegree)
            maxDegree = tmpDegree
        return d
    }, {})

    let minLength = n.length
    for(let key in degrees) {
        const d = degrees[key]
        if(d.degree === maxDegree){
            let tmpLength = d.last - d.first
            if(tmpLength < minLength){
                minLength = tmpLength
            }
        }
    }
    console.log(minLength + 1)
}
const input = '5\n' +
    '1 2 2 3 1'
degreeOfArray(input)
