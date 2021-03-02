import React, { useState, useEffect } from "react";
let timeIntervalId;
export default function Timer({ gameOver, gameStarted }) {
  let [time, setTime] = useState(0);
  let [sTime, setSTime] = useState(0);

  useEffect(() => {
    if (time > 0 && gameOver) {
      setSTime(time);
      setTime(0);
    }
  }, [gameOver, time]);

  useEffect(() => {
    const incrementTime = () => {
      let newTime=0;
      if(gameStarted) newTime = time + 1;
      setTime(newTime);
    };
    timeIntervalId = setTimeout(() => {
      incrementTime();
    }, 1000);
    if (gameOver) {
      //   let updatedTime = JSON.parse(JSON.stringify(time));

      clearInterval(timeIntervalId);
    }
  }, [time, setTime, gameOver, gameStarted]);

  return (
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰ {gameOver ? sTime : time}
      </span>
  );
}