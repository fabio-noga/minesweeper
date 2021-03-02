import React from "react";
import Timer from "./Timer";

export default function TopBar({ gameOver, gameStarted , flagsUsed}) {
  return (
    <div
      style={{
        color: "white", 
        fontSize: 20,
        background: "#4a752c",
        padding: "10px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        fontWeight:"bold"
      }}
    >
      <p style={{margin:"0"}}><span role="img" aria-label="flag" style={{ paddingBottom: 10, paddingRight:30 }}>
        🚩 {flagsUsed}
      </span>
      
      <Timer gameOver={gameOver} gameStarted={gameStarted} /></p>
    </div>
  );
}