function fancyRide(l, fares) {
    const ubers = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']
    const money = 20
    let maxCost = 0
    let maxIndex = 0
    fares.forEach((fare, index) => {
        let spent = l * fare
        if(spent > maxCost && spent <= money){
            maxCost = spent
            maxIndex = index
        }
    })
    return ubers[maxIndex]
}

const res = fancyRide(
    30,
    [0.3, 0.5, 0.7, 1, 1.3]
)
console.log(res)
