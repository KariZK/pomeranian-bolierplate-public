import { StarRate } from '@mui/icons-material';
import './styles.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

export function UsersList() {
  const [inputValue, setInputValue] = useState('');

  const [users, setUsers] = useState(
    JSON.parse(window.localStorage.getItem('users'))
  );

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const sendFormValue = () => {
    setUsers((prevState) => [
      ...prevState,
      { id: users.length + 1, name: inputValue },
    ]);
    setInputValue('');
  };

  const removeValue = (id) => {
    setUsers((currentState) => currentState.filter((item) => item.id !== id));
  };

  const sendValuesToStorage = () => {
    window.localStorage.setItem('users', JSON.stringify(users));
  };

  console.log('Users: ', users);

  return (
    <div className="users-list">
      <div className="users-list-user-wrapper">
        <div claassName="users-list-input">
          <div>NICK</div>
          <input
            type="text"
            placeholder="Jaras_2000"
            onChange={changeInputValue}
            value={inputValue}
            name="Nick input"
          />
        </div>
        <button onClick={sendFormValue} disabled={!inputValue.length}>
          Dodaj
        </button>
        <button onClick={sendValuesToStorage}>Wyślij do storage</button>
      </div>
      <div className="users-list-list-wrapper">
        {users.map(({ id, name }) => (
          <div key={id}>
            <h3>{name}</h3>
            <span onClick={() => removeValue(id)}> Usuń</span>
          </div>
        ))}
      </div>
    </div>
  );
}
