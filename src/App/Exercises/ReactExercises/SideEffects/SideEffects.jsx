import React, { useEffect, useState } from 'react';
import './styles.css';

export function SideEffects() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      const number = Math.floor(Math.random() * 2);

      setTimeout(() => {
        if (number === 1) {
          resolve([]);
        } else {
          reject([]);
        }
      }, 2000);
    });

    myPromise
      .then((result) => {
        setValue(result);
      })

      .catch((error) => {
        setValue(error);
      });
  }, []);

  return (
    <div className="side-effects">
      <ul>
        {value.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
