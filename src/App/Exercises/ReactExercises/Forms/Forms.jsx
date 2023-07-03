import React, { useEffect, useState } from 'react';
import './style.css';
import Select from 'react-select';
import { type } from '@testing-library/user-event/dist/type';
import RadioButtons from './RadioButtons/RadioButtons';
import Checkbox from './Checkbox/Checkbox';

export function Forms() {
  const [typeOfCourse, setTypeOfCourse] = useState('');
  const [userName, setUserName] = useState('');

  const [payment, setPayment] = useState('blik');

  // const [blik, setBlik] = useState(false);
  // const [paypal, setPaypal] = useState(false);
  // const [transfer, setTransfer] = useState(false);
  const [environment, setEnvironment] = useState(false);
  const [github, setGithub] = useState(false);
  const [materials, setMaterials] = useState(false);

  const [email, setEmail] = useState('');
  const [newAccount, setNewAccount] = useState();

  const [statute, setStatute] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const sendFormData = (e) => {
    e.preventDefault();

    const result = {
      typeOfCourse,
      userName,
      payment,
      environment,
      github,
      materials,
      email,
      newAccount,
      statute,
      newsletter,
    };

    console.log(typeOfCourse);
    console.log(userName);
    console.log(payment);
    console.log(environment);
    console.log(github);
    console.log(materials);
    console.log(newAccount);
    console.log(statute);
    console.log(newsletter);
  };

  const typesOfCourses = [
    { value: 'front-end', label: 'kurs front-end' },
    { value: 'back-end', label: 'kurs back-end' },
    { value: 'tester', label: 'kurs tester' },
  ];

  const paymentOptions = [
    { value: 'blik', label: 'blik' },
    { value: 'paypal', label: 'paypal' },
    { value: 'transfer', label: 'przelew bankowy' },
  ];

  const submitDisabled = userName === '' || typeOfCourse === '' || !statute;

  const isNameTyped = userName !== '';
  const isProperNameAndSurname = userName.trim().includes(' ');

  const isEmailTyped = email !== '';
  const regex = new RegExp('[a-z0-9]+@[a-z+\\.[a-z]{2,3}');
  const isProperEmail = regex.test(email);

  return (
    <div className="forms">
      <form onSubmit={sendFormData}>
        <div className="form-section">
          <div className="section-name">ZAMÓWIENIE PRODUKTU</div>

          <div className="label-name">Wybierz produkt*</div>

          {/* <select
            name="select-course"
            onChange={(event) => setTypeOfCourse(event.target.value)}
            className="select-input"
            value={typeOfCourse}
          >
            <option value="-">wybierz kurs</option>
            {typesOfCourses.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select> */}

          <Select
            options={typesOfCourses}
            value={typesOfCourses.find(
              (option) => option.value === typeOfCourse
            )}
            onChange={(optionObj) => {
              setTypeOfCourse(optionObj.value);
            }}
          />

          <div className="form-section">
            <div className="label-name">Wybierz formę płatności*</div>

            <RadioButtons
              contextName="paymets"
              options={paymentOptions}
              selectedOption={payment}
              onSelect={setPayment}
            />

            <div className="label-name">Opcje dodatkowe do zamówienia</div>

            <Checkbox
              name="environment"
              isChecked={environment}
              setter={setEnvironment}
              label="ustawienia środowiska"
            />

            <Checkbox
              name="github"
              isChecked={github}
              setter={setGithub}
              label="intro do GitHub"
            />

            <Checkbox
              name="materials"
              isChecked={materials}
              setter={setMaterials}
              label="dodatkowe materiały"
            />

            {/* <div>
              <input
                type="checkbox"
                id="setup"
                value="setup"
                checked={environment}
                onChange={() => setEnvironment(!environment)}
              />
              <label htmlFor="setup">ustawienia środowiska</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="github"
                value="github"
                checked={github}
                onChange={() => setGithub(!github)}
              />
              <label htmlFor="github">intro do GitHub</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="materials"
                value="materials"
                checked={materials}
                onChange={() => setMaterials(!materials)}
              />
              <label htmlFor="materials">dodatkowe materiały</label>
            </div> */}
          </div>
        </div>

        <div className="form-section">
          <div className="section">DANE DO REALIZACJI ZAMÓWIENIA</div>
          <label htmlFor="user-name">Imię i nazwisko*</label>
          <br />
          <input
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            placeholder="wpisz swoje imię i nazwisko"
            id="user-name"
            className={`input-area ${
              isNameTyped && !isProperNameAndSurname ? 'input-error' : ''
            }`}
          />
          {isNameTyped && !isProperNameAndSurname && (
            <span className="text-red">Imię i nazwisko nie jest poprawne.</span>
          )}
          <br />
          <label htmlFor="nick-name">Twój pseudonim*</label>
          <br />
          <input type="text" id="nick-name" />
          <br />
          <label htmlFor="address">Adres do wysyłki*</label>
          <br />
          <input type="text" id="nick" />
          <br />
          <label htmlFor="email">Adres e-mail*</label>
          <br />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
            placeholder="jan.kowalski@gmail.com"
            className={`input-area ${
              isEmailTyped && !isProperEmail ? 'input-error' : ''
            }`}
          />
          {isEmailTyped && !isProperEmail && (
            <span className="text-red">Email jest niepoprawny.</span>
          )}

          <br />
          <label htmlFor="phone">Numer kontaktowy*</label>
          <br />
          <input type="tel" id="phone" />
          <br />
          <label htmlFor="comments">Dodatkowe uwagi zamowienia</label>
          <br />
          <input type="tel" id="comments" />
          <br />
        </div>

        <div className="section">ZAKŁADANIE KONTA</div>
        <div>Chcę założyć konto razem z zamówieniem</div>

        <div>
          <Checkbox
            name="newAccount"
            isChecked={newAccount}
            setter={setNewAccount}
            label="zakładam konto"
          />

          {/* 
          <input
            type="checkbox"
            id="account"
            value="account"
            name="newAccount"
            checked={newAccount}
            onChange={() => setNewAccount(!newAccount)}
          />
          <label htmlFor="account">zakładam konto</label> */}
        </div>

        <div>
          <label htmlFor="pwd">Moje hasło</label>
          <br />
          <input type="password" id="pwd" />
        </div>

        <div>
          <label htmlFor="reppwd">Powtórz hasło</label>
          <br />
          <input type="password" id="reppwd" />
        </div>

        <div className="form-section">
          <div className="section">ZGODY I NEWSLETTER</div>
          <div>Realizując zamówienie, akceptujesz regulamin naszego sklepu</div>

          <Checkbox
            name="statute"
            isChecked={statute}
            setter={setStatute}
            label="akceptuję regulamin*"
          />

          {/* <input type="checkbox" id="statute" value="statute" />
          <label htmlFor="statute">akceptuję regulamin*</label> */}

          <div>
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </div>

          <Checkbox
            name="newsletter"
            isChecked={newsletter}
            setter={setNewsletter}
            label="zapisuję się na listę mailingową"
          />

          {/* <input type="checkbox" id="newsletter" value="newsletter" />
          <label htmlFor="newsletter">zapisuję się na listę mailingową</label> */}
        </div>

        <div className="submit">
          <button
            type="submit"
            disabled={submitDisabled}
            className="order-button "
          >
            Składam zamówienie
          </button>
        </div>
      </form>
    </div>
  );
}
