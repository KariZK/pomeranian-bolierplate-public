import React from 'react';

export default function RadioButtons({
  options,
  selectedOption,
  onSelect,
  contextName,
}) {
  return (
    <div>
      {options.map(({ value, label }) => {
        return (
          <div key={value}>
            <input
              type="radio"
              id={`radio-${value}`}
              value={value}
              className="form-radio"
              name={contextName}
              checked={selectedOption === value}
              onChange={(event) => onSelect(event.target.value)}
            />
            <label htmlFor={`radio-${value}`}>{label}</label>
          </div>
        );
      })}
    </div>
  );
}
