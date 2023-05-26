import { useState } from 'react';
import { Button } from '../Button/Button';

export const Selector = ({ options }) => {
  const [modifiedOptions, setModifiedOptions] = useState(options);
  const findActiveButton = modifiedOptions.find((obj) => obj.isActive);

  const handleClick = (clickButtonValue) => {
    setModifiedOptions(
      modifiedOptions.map((option) => {
        return {
          ...option,
          isActive: clickButtonValue === option.value,
        };
      })
    );
  };

  return (
    <div>
      {modifiedOptions.map((obj) => {
        const { value, label, isActive } = obj;
        return (
          <Button
            key={value}
            isActive={isActive}
            onClick={() => handleClick(value)}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};
