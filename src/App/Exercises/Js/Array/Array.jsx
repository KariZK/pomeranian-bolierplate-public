import './styles.css';
import { useState } from 'react';

export function Array() {
  const [myList, setMyList] = useState([
    {
      name: 'Audi',
      color: 'black',
      date: function () {
        return new Date();
      },
      sold: true,
    },
    {
      name: 'VWx',
      color: 'silver',
      date: function () {
        return new Date();
      },
      sold: false,
    },
    {
      name: 'VW',
      color: 'silver',
      date: function () {
        return new Date();
      },
      sold: false,
    },
  ]);

  console.log(myList.map((item) => item.name));

  return (
    <div>
      {/* {myList.map(({ name, date }) => { 
        return (
          <ls key={name}>
            <li>{name}</li>
            <li>{date()}</li>
          </ls>
        );
      })} */}
    </div>
  );
}
