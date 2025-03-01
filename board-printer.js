/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {

    board.forEach(row => {
        let string = row.join(` | `);
        
    

        console.log(string.replaceAll(`_`,` `));
        console.log(`=========`);
        })
    };



const board = [
    ['X', '_', '_'],
    ['_', 'X', '_'],
    ['O', 'O', 'X']
];
// printBoard([
//     ['X', '_', '_'],
//     ['_', 'X', '_'],
//     ['O', 'O', 'X']
// ]);

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
    // board.forEach(row => {
    //     row.forEach(element => {
    //         if(element === `_`)return false;
    //         else return true;
                
            
    //     });
        
    // });

    for(let i =0; i<board.length;i++){
        for(let k=0; i<board[i].length;i++){
            if(board[i][k]===`_`) return false;
        
        }
    }
    return true;

}

console.log(checkIfNoMovesLeft(board));
