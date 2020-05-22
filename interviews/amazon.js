function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE
    let newState = []
    for (let day = 0; day < days; day++) {
        newState = []
        for (let i = 0; i < states.length; i++) {
            newState[i] = (states[i - 1] || 0) === (states[i + 1] || 0) ? 0 : 1
        }
        states = newState
    }
    return newState
}

// console.log(cellCompete([1,0,0,0,1,0,0], 1))
// console.log(cellCompete([1,1,1,0,1,1,1,1] , 2))


function generalizedGCD(num, arr)
{
    // WRITE YOUR CODE HERE
    let gcd = Math.min.apply(this, arr)

    while (!dividesExactly(gcd, arr)) {
        gcd--
    }
    return gcd
}

function dividesExactly(num, arr) {
    for (let e of arr) {
        if (e % num !== 0) {
            return false
        }
    }
    return true
}


// console.log(generalizedGCD(5, [2,4,6,8,10]))
// console.log(generalizedGCD(5, [2,3,4,5,6]))



function numberAmazonGoStores(rows, columns, grid)
{
    // WRITE YOUR CODE HERE
    let clusters = 0
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if(grid[row][column] === 1){
                clusters++
                markCluster(column, row, grid)
            }
        }
    }
    return clusters
}
// FUNCTION SIGNATURE ENDS

function markCluster(posX, posY, grid) {
    if (grid[posY][posX] !== 1) {
        return
    }
    grid[posY][posX] = -1

    if (posX + 1 < grid[0].length && grid[posY][posX + 1] === 1) {
        markCluster(posX + 1, posY, grid)
    }
    if (posX - 1 >= 0 && grid[posY][posX - 1] === 1) {
        markCluster(posX - 1, posY, grid)
    }
    if (posY + 1 < grid.length && grid[posY + 1][posX] === 1) {
        markCluster(posX, posY + 1, grid)
    }
    if (posY - 1 >= 0 && grid[posY - 1][posX] === 1) {
        markCluster(posX, posY - 1, grid)
    }
}



function minimumDays(rows, columns, grid)
{
    // WRITE YOUR CODE HERE
    let updates = findUpdate(rows, columns, grid)
    if(updates.length === 0) {
        return null
    }
    let updated = updates.length
    let days = 0
    // while(!allUpdated(rows, columns, grid)) {
    while(updated !== rows * columns) {
        days++
        updates = update(updates, rows, columns, grid)
        updated += updates.length
    }
    return days

}
// FUNCTION SIGNATURE ENDS

function findUpdate(rows, columns, grid) {
    let updates = []
    for(let row = 0; row < rows; row++){
        for(let column = 0; column < columns; column++){
            if(grid[row][column] === 1){
                updates.push({row, column})
            }
        }
    }
    return updates
}

function update(updates, rows, columns, grid) {
    let newUpdates = []
    for(let server of updates){
        if(server.column - 1 >= 0 && grid[server.row][server.column - 1] === 0) {
            newUpdates.push({column: server.column - 1, row: server.row})
            grid[server.row][server.column - 1] = 1
        }
        if(server.column + 1 < columns && grid[server.row][server.column + 1] === 0) {
            newUpdates.push({column: server.column + 1, row: server.row})
            grid[server.row][server.column + 1] = 1
        }
        if(server.row - 1 >= 0 && grid[server.row - 1][server.column] === 0) {
            newUpdates.push({column: server.column, row: server.row - 1})
            grid[server.row - 1][server.column] = 1
        }
        if(server.row + 1 < rows && grid[server.row + 1][server.column] === 0) {
            newUpdates.push({column: server.column, row: server.row + 1})
            grid[server.row + 1][server.column] = 1
        }
    }
    return newUpdates
}

function allUpdated(rows, columns, grid) {
    for(let row = 0; row < rows; row++){
        for(let column = 0; column < columns; column++){
            if(grid[row][column] === 0){
                return false
            }
        }
    }
    return true
}

const grid = [
    [0,0,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,1],
    [0,0,0,0,0,0],
    [0,1,0,0,0,0]
]
const grid1 = [
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1]
]
const grid0 = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]
console.log(minimumDays(5,6, grid0))
console.error()
