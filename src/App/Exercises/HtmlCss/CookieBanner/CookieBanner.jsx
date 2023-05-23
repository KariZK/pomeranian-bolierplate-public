import React, { useState } from 'react';
import './styles.css';
import { CookieIcon } from '../../../Components/Icons/CookieIcon';
import { useEffect } from 'react';

export function CookieBanner() {
  const [cookieBannerHidden, setCookieBannerHidden] = useState(false);

  function setCookiesInfo() {
    localStorage.setItem('cookieState', 1);
    setCookieBannerHidden(true);
    // alert('działa');
  }

  function checkCookieData() {
    return localStorage.getItem('cookieState');
  }

  useEffect(() => {
    if (checkCookieData()) {
      setCookieBannerHidden(true);
    }
  }, []);

  return (
    <div>
      <div
        className={
          cookieBannerHidden
            ? 'cookie-banner cookie-hidden'
            : 'cookie-banner cookie-visible'
        }
      >
        <div className="cookie-banner-content">
          <div className="cookie-icon">
            <CookieIcon />
          </div>
          <div className="text-1">
            <h3>Pozwól na pliki cookies</h3>
            <p>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              preferencji. W tym celu kliknij przycisk po prawej stronie
              “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </p>
          </div>
        </div>
        <div className="section-2">
          <button className="button-1" onClick={setCookiesInfo}>
            W PORZĄDKU
          </button>
          <button className="button-2">DOPASUJ ZGODY</button>
        </div>
      </div>
    </div>
  );
}
