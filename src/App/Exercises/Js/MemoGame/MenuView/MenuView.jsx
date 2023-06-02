import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { SelectButtons } from '../SelectButtons/SelectButtons';

export const MenuView = ({ setGameStarted, setBoardSize }) => {
  return (
    <>
      <Menu label="Rozmiar planszy">
        <SelectButtons
          setBoardSize={setBoardSize}
          options={[
            { label: '8 elementów', value: 8, isActive: false },
            { label: '16 elementów', value: 16, isActive: false },
            { label: '20 elementów', value: 20, isActive: true },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </>
  );
};
