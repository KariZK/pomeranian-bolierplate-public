import { useState } from 'react';
import { Button } from '../Button/Button';

export const SelectButtons = (props) => {
  const { options } = props;

  const [newOptions, setNewOptions] = useState(options);

  function handleClick(value) {
    setNewOptions(
      newOptions.map((options) => {
        return {
          ...options,
          isActive: options.value === value,
        };
      })
    );
  }

  return (
    <>
      {newOptions.map(({ label, value, isActive }) => (
        <Button
          key={value}
          onClick={() => handleClick(value)}
          isActive={isActive}
        >
          {label}
        </Button>
      ))}
    </>
  );
};
