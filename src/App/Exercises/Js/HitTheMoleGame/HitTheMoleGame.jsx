import './styles.css';
import { useState } from 'react';
import { Menu } from './Menu/Menu';
import { Button } from './Button/Button';
import { SelectButtons } from './SelectButtons/SelectButtons';
import { Selector } from './Selector/Selector';

export const HitTheMoleGame = () => {
  const [time, setTime] = useState(1);
  const [moles, setMoles] = useState(1);

  // const timeOptions = [
  //   { label: '1 minuta', value: 1 },
  //   { label: '2 minuty', value: 2 },
  //   { label: '3 minuty', value: 3 },
  // ];

  // const moleOptions = [
  //   { label: '1 kret', value: 1 },
  //   { label: '2 krety', value: 2 },
  //   { label: '3 krety', value: 3 },
  // ];

  return (
    <div>
      <h3>KRET</h3>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

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
        <Button>Start</Button>
      </div>
    </div>
  );
};
