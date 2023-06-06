import './MemoGame.css';
import { useState, useEffect } from 'react';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import { Board } from './Board/Board';

export function MemoGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [stepAmount, setStepAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();
  const [boardSize, setBoardSize] = useState(2);

  const [gameEnd, setGameEnd] = useState(false);

  const [myTime, setMyTime] = useState(0);

  useEffect(() => {
    if (isGameStarted) {
      const gameInterval = setInterval(() => {
        setTime((prev) => {
          return prev + 1;
        });
      }, 1000);

      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTimeInterval();
      setTime(0);
    }
  }, [isGameStarted]);

  const stopButtonClick = () => {
    setGameStarted(false);
    setStepAmount(0);
  };

  return (
    <div className="memo-game">
      {gameEnd && isGameStarted ? (
        <h1>
          Gratulacje! Twój wynik to {boardSize / 2} par w czasie {time}!
        </h1>
      ) : (
        ''
      )}
      {!isGameStarted && (
        <MenuView setGameStarted={setGameStarted} setBoardSize={setBoardSize} />
      )}
      {isGameStarted && (
        <GameView
          setGameStarted={setGameStarted}
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          stepAmount={stepAmount}
          setGameEnd={setGameEnd}
          time={time}
          myTime={myTime}
          stopButtonClick={stopButtonClick}
        />
      )}
      {isGameStarted && (
        <Board
          setGameEnd={setGameEnd}
          boardSize={boardSize}
          stepAmount={stepAmount}
          setStepAmount={setStepAmount}
          time={time}
          setMyTime={setMyTime}
        />
      )}
    </div>
  );
}
