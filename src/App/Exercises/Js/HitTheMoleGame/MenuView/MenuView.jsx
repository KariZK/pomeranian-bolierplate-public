import './menuView.css';
import { Button } from '../Button/Button';
import { Selector } from '../Selector/Selector';

export const MenuView = ({ setGameStarted }) => {
  return (
    <>
      <div className="settings-container">
        <div className="label">Czas gry</div>

        <Selector
          options={[
            { label: '1 minuta', value: 1, isActive: true },
            { label: '2 minuty', value: 2, isActive: false },
            { label: '3 minuty', value: 3, isActive: false },
          ]}
        />
      </div>
      <div className="settings-container">
        <div className="label">Liczba kretów</div>

        <Selector
          options={[
            { label: '1 kret', value: 1, isActive: true },
            { label: '2 krety', value: 2, isActive: false },
            { label: '3 krety', value: 3, isActive: false },
          ]}
        />
      </div>
      <div className="settings-container">
        <div className="label">Przycisk sterujący</div>

        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </div>
    </>
  );
};
