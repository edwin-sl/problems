function processData(input) {
    //Enter your code here
    let inputs = input.split('\n')
    let q = input[0]
    let currLine = 1
    while (q-- > 0) {
        let metaRaw = inputs[currLine++]
        let metaData = metaRaw.split(' ')
        let n = metaData[0]
        let m = metaData[1]

        let graph = {}
        for (let i = 0; i < m; i++) {
            let edgeMetaRaw = inputs[i + currLine]
            let edgeMetaData = edgeMetaRaw.split(' ')

            if (!graph[edgeMetaData[0]]) {
                graph[edgeMetaData[0]] = {}
            }
            graph[edgeMetaData[0]][edgeMetaData[1]] = 6

            if (!graph[edgeMetaData[1]]) {
                graph[edgeMetaData[1]] = {}
            }
            graph[edgeMetaData[1]][edgeMetaData[0]] = 6
        }
        currLine += m
        let s = inputs[currLine++]


    }
}

function processGraph(graph, start, nodes) {
    for (let i = 1; i <= nodes; i++) {
        if (i === start) continue

        let currNode = start
        let explored = [currNode]
        let neighbors = graph[currNode]

    }
}

function traverseGraph(graph, neighbors, explored, destiny) {

    for (let neighbor of neighbors) { }
}
