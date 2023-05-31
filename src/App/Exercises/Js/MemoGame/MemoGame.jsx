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

const getInitialBoard = (difficulty) => {
  const newArray = new Array(difficulty * difficulty).fill({
    value: '',
    clicked: false,
    isTurned: false,
    id: '',
  });

  return newArray.map((obj, index) => ({ ...obj, id: index }));
};

export const MemoGame = () => {
  // TODO: When all tiles turned and timer > 0 alert("Win!")
  // TODO: Fill with names
  // const [namesToFillTheBoard, setNamesToFillTheBoard] = useState(
  //   new Array(2).fill('')
  // );

  const [difficulty, setDifficulty] = useState(2);

  const namesToFillTheBoard = getRandomNames(difficulty);

  const [board, setBoard] = useState(getInitialBoard(difficulty));
  console.log('board', board);

  useEffect(() => {
    if (difficulty * difficulty !== board.length) {
      setBoard(getInitialBoard(difficulty));
    }
  }, [difficulty]);

  useEffect(() => {
    const newBoard = board;
    const namesAmount = namesToFillTheBoard.length;

    namesToFillTheBoard.forEach((name, index) => {
      newBoard[index] = { ...board[index], value: name };
      newBoard[index + namesAmount] = {
        ...board[index + namesAmount],
        value: name,
      };
    });

    setBoard(newBoard);
  }, [difficulty]);

  const organizeArray = () => {
    const shuffledArray = shuffleArray(board);

    const newArr = new Array(difficulty).fill('');

    return newArr.map((_, index) => {
      const value = index * difficulty;
      console.log('SLICE', shuffledArray.slice(value, value + difficulty));
      return shuffledArray.slice(value, value + difficulty);
    });
  };

  const organizedArray = organizeArray();

  console.log('organizedArray', organizedArray);

  return (
    <>
      <Timer />
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      <div
        className="wrapper"
        style={{ gridTemplateColumns: `repeat(${board.length}, 1fr)` }}
      >
        <MemoBoard board={organizedArray} />
      </div>
    </>
  );
};
