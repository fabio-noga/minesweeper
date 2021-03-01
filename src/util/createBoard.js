export default (row,col,bombs) => {
    let board=[];
    let mineLocation = [];

    //Initialize board
    for  (let x=0; x<row; x++){
        let subCol=[];
        for (let y=0;y<col;y++){
            subCol.push({
                value:0,
                revealed: false,
                neighbors: [],
                x:x,
                y:y,
                flagged: false,
            });
        }
        board.push(subCol);
    }

    let bombsCount=0;
    while(bombsCount<bombs){
        let x=randomNum(0,row-1);
        let y=randomNum(0,col-1);

        if(board[x][y].value === 0){
            board[x][y].value="X";
            mineLocation.push([x,y]);
            bombsCount++;
        }
    }

    //Generate numbers
    for (let x=0;x<row;x++){
        for (let y=0;y<col;y++){
            if(board[x][y].value==="X") continue;
            if(x>0 && board[x-1][y].value==="X") board[x][y].value++;                           //TOP
            if(x>0 && (y < col-1) && board[x-1][y+1].value==="X") board[x][y].value++;          //TOP_RIGHT
            if((y < col-1) && board[x][y+1].value==="X") board[x][y].value++;                   //RIGHT
            if((y < col-1) && (x < row-1) && board[x+1][y+1].value==="X") board[x][y].value++;  //RIGHT_BOTTOM
            if((x < row-1) && board[x+1][y].value==="X") board[x][y].value++;                   //BOTTOM
            if((x < row-1) && y>0 && board[x+1][y-1].value==="X") board[x][y].value++;          //BOTTOM_LEFT
            if(y>0 && board[x][y-1].value==="X") board[x][y].value++;                           //LEFT
            if(x>0 && y>0 && board[x-1][y-1].value==="X") board[x][y].value++;                  //LEFT_TOP
        }
    }

    return {board, mineLocation};
};
function randomNum(min = 0, max) {return Math.floor(Math.random() * (max - min + 1) + min);}