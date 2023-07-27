import { NavLink } from 'react-router-dom';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { Faq } from '../Components/Icons/Faq';
import { TechStackIcon } from '../Components/Icons/TechStackIcon';
import { PadIcon } from '../Components/Icons/PadIcon';
import { GameboyIcon } from '../Components/Icons/GameboyIcon';
import { FormIcon } from '../Components/Icons/FormIcon';
import { CogIcon } from '../Components/Icons/CogIcon';
import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" /> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="my-cv">
              <PersonalCardIcon className="menu-icon" /> Moje CV
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="blocks">
              <TechStackIcon className="menu-icon" /> Tech stack
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" /> Ćwiczenia
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="exercises/js/hit-the-mole">
              <PadIcon className="menu-icon" /> Gra | kret
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="exercises/js/memo-game">
              <GameboyIcon className="menu-icon" /> Gra | memo
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="exercises/react/forms">
              <FormIcon className="menu-icon" /> Formularz
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="blog">
              <CalendarIcon className="menu-icon" /> Blog
            </NavLink>
          </li>

          <li>
            <NavLink className="aside-row" to="faq">
              <Faq className="menu-icon" /> FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ padding: '1rem 0' }}>
        <ul>
          <li>
            <NavLink className="aside-row" to="faq">
              <CogIcon className="menu-icon" /> Ustawienia
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
