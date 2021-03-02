import React, { useEffect, useState } from 'react';
import createBoard from '../util/createBoard';
import { revealed } from '../util/reveal';
import Cell from './Cell';
import Modal from './Modal';
import Timer from './Timer';
import TopBar from './TopBar';



const Board = () =>{
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [bombs, setBombs] = useState(15);

    const [grid, setGrid] = useState([]);
    const [nonMineCount, setNonMineCount] = useState(0);
    const [mineLocations, setMineLocations] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [flagsUsed, setFlagsUsed] = useState(bombs);

    useEffect(()=>{
        freshBoard(width, height, bombs);
    },[]);
    const freshBoard = (width, height, bombs) => {
        const newBoard = createBoard(width, height, bombs);
        setNonMineCount(width*height-bombs);
        setMineLocations(newBoard.mineLocation);
        setGrid(newBoard.board);
    }
    //Flag Cell
    const updateFlag = (e,x,y) => {
        e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].flagged) {
            newGrid[x][y].flagged=false;
            setFlagsUsed(flagsUsed+1);
        }else {
            newGrid[x][y].flagged=true;
            setFlagsUsed(flagsUsed-1);
        }
        setGrid(newGrid);
        console.log("Flag");
    };

    //Reveal Cell
    const revealCell = (x,y)=> {
        if(grid[x][y].revealed || gameOver || grid[x][y].flagged)return;
        setGameStarted(true);
        console.log(gameStarted);
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value==="X"){
            for(let i=0;i<mineLocations.length;i++){
                newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed=true
            }
            setGrid(newGrid);
            //alert("you lost");
            setGameOver(true);
        }else{
            let newRevealedBoard=revealed(newGrid,x,y, nonMineCount);
            newGrid[x][y].revealed=true;
            setGrid(newRevealedBoard.arr);
            setNonMineCount(newRevealedBoard.newNonMinesCount);
            if(newRevealedBoard.newNonMinesCount===0){
                alert("Congratulations, you won!");
                setGameOver(true);
            }
        }
    };


    const restartGame = () =>{
        setGameStarted(false);
        freshBoard(width, height, bombs);
        setGameOver(false);
        setFlagsUsed(bombs);
      };

    return <div style={{left:"50%",transform:"translateX(-50%)", position: "relative", width: width*40, boxShadow:"0px 0px 12px #000"}}>
        {gameOver && <Modal restartGame={restartGame}/>}
        <TopBar flagsUsed={flagsUsed} gameOver={gameOver} gameStarted={gameStarted} />
        {grid.map((singleRow, index1)=>{
        return (
            <div style={{display:"flex", justifyContent:'center'}} key={index1}>
                {singleRow.map((singleBlock, index2) => {
                    return (<Cell 
                                revealCell={revealCell} 
                                details={singleBlock} 
                                updateFlag={updateFlag} 
                                key={index2}>
                            
                            </Cell>)
                })}
            </div>
        ); 
    })}
    </div>
}

export default Board;