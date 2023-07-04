import './styles/footer.css';

const traineeName = 'Karina Złotogórska-Krzemińska';
const email = 'karina.zlotogorska@pomeranianstartit.pl';
const phone = '+48-999-999-999';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju
      </div>
      <div className="footer-trainee-name"> {traineeName} </div>
      <div>
        Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
      </div>
      <div>
        {' '}
        <a href={`mailto:${email}`}>{`${email}`}</a>
      </div>
      {/* <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a> */}
    </footer>
  );
}
