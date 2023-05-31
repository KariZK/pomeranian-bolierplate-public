import React, { useEffect, useState } from 'react';
import './styles.css';
import db from './db.json';
import { Timer } from './Timer/Timer';
import { Difficulty } from './Difficulty/Difficulty';
import { MemoBoard } from './MemoBoard/MemoBoard';

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomNames = (difficulty) => {
  const names = new Array((difficulty * difficulty) / 2).fill('');

  names.forEach((_, index) => {
    let randomIndex = rand(0, db.names.length);
    names[index] = db.names[randomIndex];
  });

  return names;
};

export const MemoGame = () => {
  // TODO: When all tiles turned and timer > 0 alert("Win!")
  // TODO: Fill with names
  // const [namesToFillTheBoard, setNamesToFillTheBoard] = useState(
  //   new Array(2).fill('')
  // );

  const [difficulty, setDifficulty] = useState(2);

  const namesToFillTheBoard = getRandomNames(difficulty);
  console.log('namesToFillTheBoard', namesToFillTheBoard);

  const [board, setBoard] = useState(
    new Array(2).fill(
      new Array(2).fill({
        value: '',
        clicked: false,
        isTurned: false,
        id: '',
      })
    )
  );
  console.log('board', board);

  useEffect(() => {
    if (difficulty !== board.length) {
      setBoard(
        new Array(difficulty).fill(
          new Array(difficulty).fill({ value: '', clicked: false })
        )
      );
    }
  }, [difficulty]);

  useEffect(() => {
    const newBoard = board.flat();
    const namesAmount = namesToFillTheBoard.length;

    namesToFillTheBoard.forEach((name, index) => {
      newBoard[index] = { ...newBoard[index], value: name };
      newBoard[index + namesAmount] = {
        ...newBoard[index + namesAmount],
        value: name,
      };
    });

    const shuffledArray = shuffleArray(newBoard);

    const newArr = new Array(difficulty).fill('');

    setBoard(
      newArr.map((_, index) => {
        const value = index * difficulty;
        return shuffledArray.slice(value, value + difficulty);
      })
    );
  }, []);

  return (
    <>
      <Timer />
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      <div
        className="wrapper"
        style={{ gridTemplateColumns: `repeat(${board.length}, 1fr)` }}
      >
        <MemoBoard board={board} />
      </div>
    </>
  );
};
