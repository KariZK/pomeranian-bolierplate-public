import './styles.css';
import { CogIcon } from '../../Components/Icons/CogIcon';
import { ArrowIcon } from '../../Components/Icons/ArrowIcon';

export const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="cog-icon">
        <CogIcon />
      </div>
      <div className="circle"></div>
      <div className="trainee">
        <div className="name">Karina</div>
        <div className="position">kursant</div>
      </div>
      <div className="arrow-icon">
        <ArrowIcon />
      </div>
    </div>
  );
};
