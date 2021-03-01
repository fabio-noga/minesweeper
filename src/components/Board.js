import React, { useEffect, useState } from 'react';
import createBoard from '../util/createBoard';
import Cell from './Cell';

const Board = () =>{
    const [grid, setGrid] = useState([]);

    useEffect(()=>{
        function freshBoard(){
            const newBoard = createBoard(5,5,5);
            setGrid(newBoard.board);
        }
        freshBoard();
    },[]);

    //Flag Cell
    const updateFlag = (e,x,y) => {
        e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged=true;
        setGrid(newGrid);
        console.log("Right Click");
    };

    //Reveal Cell
    const revealCell = (x,y)=> {
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            console.log("you lost");
            setGrid(newGrid);
        }else{
            newGrid[x][y].revealed=true;
            setGrid(newGrid);
        }
    };

    return grid.map((singleRow, index1)=>{
        return (
            <div style={{display:"flex"}} key={index1}>
                {singleRow.map((singleBlock, index2) => {
                    return (<Cell 
                                revealCell={revealCell} 
                                details={singleBlock} 
                                updateFlag={updateFlag} 
                                key={index2}>
                            
                            </Cell>);
                })}
            </div>
        ); 
    });
}

export default Board;