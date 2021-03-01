import React, { useEffect, useState } from 'react';


export default function Cell({details, updateFlag, revealCell}){
    return(
        <div 
            onClick ={() => revealCell(details.x,details.y)} 
            onContextMenu={(e) => updateFlag(e,details.x,details.y)} 
            style={style}>
                {details.revealed ? details.value : ""}
        </div>
    )
}

const style = {
    width:40, 
    height:40, 
    background:"lightgrey",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    border: '1px solid black',
    cursor:'pointer',
}