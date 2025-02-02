import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';

export const GameView = ({
  setGameStarted,
  stepAmount,
  time,
  myTime,
  stopButtonClick,
}) => {
  return (
    <>
      <Menu label="Czas gry">
        <div className="value-field">{time}</div>
      </Menu>
      <Menu label="Liczba ruchów">
        <div className="value-field">{stepAmount}</div>
      </Menu>
      <Menu label="Przycisk sterujący">
        <Button onClick={() => setGameStarted(false)}>Pass</Button>
      </Menu>
    </>
  );
};
