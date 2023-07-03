import React from 'react';

export default function Checkbox({ name, isChecked, setter, label }) {
  return (
    <div>
      <input
        type="checkbox"
        id={`check-${name}`}
        name={`check-${name}`}
        checked={isChecked}
        onChange={() => setter(!isChecked)}
      />
      <label htmlFor={`check-${name}`}>{label}</label>
    </div>
  );
}
