function ticTacToeWhoWins(game) {
    let check = (a, b, c) => {
        if(a % 2 === b % 2 && a % 2 === c % 2)
            return Math.max(a, b, c)
        return -1
    }
    let horizontal = (row) => {
        return check(game[row][0], game[row][1], game[row][2])
    }
    let vertical = (column) => {
        return check(game[0][column], game[1][column], game[2][column])
    }
    let diagonal = () => {
        return check(game[0][0], game[1][1], game[2][2])
    }
    let slash = () => {
        return check(game[0][2], game[1][1], game[2][0])
    }

    let winSymbol = 'draw'
    let winMove = 9

    let updateWin = (move) => {
        if(move > 0 && move < winMove){
            winMove = move
            winSymbol = move % 2 === 0 ? 'X' : 'O'
        }
    }

    for(let i = 0; i < 3; i++){
        updateWin(horizontal(i))
        updateWin(vertical(i))
    }
    updateWin(diagonal())
    updateWin(slash())

    return winSymbol
}


let game = ["425",
    "108",
    "376"]
let res = ticTacToeWhoWins(game)
console.log(res)
