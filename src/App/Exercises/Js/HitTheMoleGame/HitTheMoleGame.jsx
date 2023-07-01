import './styles.css';
import { useState } from 'react';
import { Menu } from './Menu/Menu';
import { Button } from './Button/Button';
import { SelectButtons } from './SelectButtons/SelectButtons';
import { Selector } from './Selector/Selector';
import { Playground } from './Playground/Playground';
import { MoleIcon } from '../../../Components/Icons/MoleIcon';
import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';

export const HitTheMoleGame = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  const [time, setTime] = useState(1);
  const [moles, setMoles] = useState(1);

  return (
    <div>
      <h3>KRET</h3>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {isGameStarted ? (
        <GameView setGameStarted={setGameStarted} score={score} />
      ) : (
        <MenuView setGameStarted={setGameStarted} />
      )}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
};
