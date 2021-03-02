import React, { useEffect, useState } from 'react';
import { mineColor } from '../util/mineColors';
import Circle from './Circle';


export default function Cell({details, updateFlag, revealCell}){

    const cellstyle = {
        background: details.revealed
          ? details.value === "X"
            ? mineColor()
            : bombChexPattern(details.x, details.y)
          : chexPattern(details.x, details.y),
        color: numColorCode(details.value),
      };

    return(
        <div 
            onClick ={() => revealCell(details.x,details.y)} 
            onContextMenu={(e) => updateFlag(e,details.x,details.y)} 
            style={cellstyle}
            className="cellStyle">
                {!details.revealed && details.flagged 
                    ? "🚩"
                    : details.revealed && details.value !==0 
                        ? (details.value==='X') 
                            ? <Circle/>
                            : details.value
                        : ""}
        </div>
    )
}

/*const style = {
    width:40, 
    height:40, 
    background:"lightgrey",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    border: '1px solid black',
    cursor:'pointer',
}*/

const bombChexPattern = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
      return "#e5c29f";
    } else if (x % 2 === 0 && y % 2 !== 0) {
      return "#d7b899";
    } else if (x % 2 !== 0 && y % 2 === 0) {
      return "#d7b899";
    } else {
      return "#e5c29f";
    }
  };
  
  const chexPattern = (x, y) => {
    if (x % 2 === 0 && y % 2 === 0) {
      return "#aad751";
    } else if (x % 2 === 0 && y % 2 !== 0) {
      return "#a2d249";
    } else if (x % 2 !== 0 && y % 2 === 0) {
      return "#a2d249";
    } else {
      return "#aad751";
    }
  };
  
  const numColorCode = (num) => {
    if (num === 1) {
      return "#1976d2";
    } else if (num === 2) {
      return "#388d3c";
    } else if (num === 3) {
      return "#d33030";
    } else if (num === 4) {
      return "#7c21a2";
    } else if (num === 5) {
      return "#1976d2";
    } else if (num === 6) {
      return "#1976d2";
    } else {
      return "white";
    }
  };

