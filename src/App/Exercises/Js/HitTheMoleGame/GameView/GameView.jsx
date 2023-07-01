import './gameView.css';
import { Button } from '../Button/Button';
import { Selector } from '../Selector/Selector';

export const GameView = ({ setGameStarted, score, setScore }) => {
  return (
    <>
      <div className="settings-container">
        <div className="label">Czas do końca</div>
        <div className="value-field">Czas</div>
      </div>
      <div className="settings-container">
        <div className="label">Wynik</div>
        <div className="value-field">{score}</div>
      </div>
      <div className="settings-container">
        <div className="label">Przycisk sterujący</div>
        <Button
          onClick={() => {
            setGameStarted(false);
            setScore(0);
          }}
        >
          Stop
        </Button>
      </div>
    </>
  );
};
