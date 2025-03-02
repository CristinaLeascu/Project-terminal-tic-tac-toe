/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'], 1,1 / 1,2 / 1,3
            ['_', 'X', '_'], 2,1 / 2,2 / 2,3
            ['O', 'O', 'X'], 3,1 / 3,2 / 3,3  
        ];
*/
// [1, 1], 1,3 



//function validateMove(move, board) {
//    // we need to access the position on the board with 'move' 
//    console.log(move)
//    console.log(move[0], move[1])
//    const rawNumber = move[0]
//    const columnNumber = move[1]
//    console.log(board[rawNumber][columnNumber]) //'X'


   


   
 // check if position has free space, which is represented by underscore '_'




/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/

function isValidMove(move, board) {
    const regex = /^[1-3],[1-3]$/;
    if (!regex.test(move)) {
        console.log("Try again...");
        return false;
    }
    
    let [row, col] = move.split(',').map(Number);
    row -= 1;
    col -= 1;
    
    if (board[row][col] !== '_') {
        console.log("Try again...");
        return false;
    }
    
    return true;
}

export function makeMove(board, move, player) {
    if (!isValidMove(move, board)) {
        return false;
    }
    
    let [row, col] = move.split(',').map(Number);
    row -= 1;
    col -= 1;
    
    board[row][col] = player;
    return true;
}