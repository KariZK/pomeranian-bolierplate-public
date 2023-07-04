import './styles.css';
import { CogIcon } from '../../Components/Icons/CogIcon';
import { ArrowIcon } from '../../Components/Icons/ArrowIcon';
import { Logo } from '../Logo/Logo';

export const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="cog-icon">
        <CogIcon />
      </div>
      <div className="circle"></div>
      <div className="trainee">
        <div className="trainee-name">Karina</div>
        <span className="position">kursantka</span>
      </div>
      <div className="arrow-icon">
        <ArrowIcon />
      </div>
    </div>
  );
};
