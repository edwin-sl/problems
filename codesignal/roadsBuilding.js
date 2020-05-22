function roadsBuilding(cities, roads) {
    let hashRoad = (city1 ,city2) => city2 * cities + city1
    let unhash = (hash) => [hash % cities, Math.floor(hash / cities)]
    let hashedExistingRoads = {}
    for (let road of roads) {
        let hash = hashRoad(Math.max(road[0], road[1]), Math.min(road[0], road[1]))
        hashedExistingRoads[hash] = true
    }
    let missingRoads = []
    for (let i = 1; i < cities * cities; i++) {
        if(hashedExistingRoads[i])
            continue
        let road = unhash(i)
        if(road[0] === road[1] || road[0] > cities / 2)
            continue
        missingRoads.push(road)
    }
    return missingRoads
}


let cities = 4
let roads = [[0,1],
        [1,2],
        [2,0]]

let res = roadsBuilding(cities, roads)
console.log(res)
