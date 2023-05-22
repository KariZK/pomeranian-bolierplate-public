import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export function DateTime() {
  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    setMyDate(new Date());
  }, []);

  return (
    <div>
      {myDate.getDay()} - {myDate.getFullYear()}
    </div>
  );
}
