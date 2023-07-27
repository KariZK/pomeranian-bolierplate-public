import './styles.css';

export const MyData = () => {
  return (
    <div className="my-data">
      <div className="my-data-circle"></div>
      <div className="my-data-name">Karina Złotogórska-Krzemińska</div>
      <div className="my-data-details">
        <div className="my-data-address">Gdańsk</div>
        <div className="my-data-email">
          e-mail: <br />
          karina.zlotogorska@pomeranianstartit.pl
        </div>
        <div className="my-data-phone">
          telefon: <br />
          +48 506 135 741
        </div>
      </div>
    </div>
  );
};
