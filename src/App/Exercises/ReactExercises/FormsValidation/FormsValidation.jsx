import React, { useState } from 'react';
import './styles.css';

const containsUppercase = (str) => {
  return /[A-Z]/.test(str);
};

const containsEmail = (str) => {
  const regexExp = '/[a-z0-9]+@[a-z+\\.[a-z]{2,3}/';
  return regexExp.test(str);
};

export function FormsValidation() {
  const [error, setError] = useState('');

  const isPasswordValid = (pass, repeat) => {
    if (pass !== repeat) {
      setError('Hasło nieprawidłowe');
      return false;
    }
    if (!containsUppercase(pass)) {
      setError('Hasło nie zawiera dużej litery');
      return false;
    }
    if (pass.lenght < 8) {
      setError('Hasło za krótkie');
      return false;
    }
    setError('');
    return true;
  };

  const isEmailValid = (mail) => {
    if (!mail) {
      setError('Brak maila');
      return false;
    }
    if (!containsEmail(mail)) {
      setError('Błędy mail');
      return false;
    }
    setError('');
    return true;
  };

  const sendFormData = (data) => {
    data.preventDefault();

    const password = data.target.password.value;
    const passwordRepeat = data.target.passwordRepeat.value;
    const email = data.target.email.value;

    if (isPasswordValid(password, passwordRepeat) && isEmailValid(email)) {
      console.log('OK');
    } else {
      console.log('Error');
    }

    // if (password !== passwordRepeat) {
    //   setError('Hasło nieprawidłowe');
    // } else if (!isUppercasePassword(password) || password.lenght < 8) {
    //   setError('Hasło nie zawiera dużej litery lub jest za krótkie.');
    // } else {
    //   setError('');
    // }
  };

  return (
    <div className="forms-validation">
      <form className="form" onSubmit={sendFormData}>
        <div>
          <label htmlFor="email">Mój email</label>
          <br />
          <input
            type="email"
            id="emial"
            name="email"
            required
            placeholder="jan.kowalski@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="password">Moje hasło</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="56ggW457hh#$"
            required
          />
        </div>

        <div>
          <label htmlFor="passwordRepeat">Powtórz hasło</label>
          <br />
          <input
            type="password"
            id="passwordRepeat"
            name="passwordRepeat"
            placeholder="56ggW457hh#$"
            required
          />
        </div>
        <br />
        {error || '---'}
        <br />
        <button type="submit">Zapisz</button>
      </form>
    </div>
  );
}
