import { useRoutes } from 'react-router-dom';

import { BlockLayout } from './Blocks';
import { routerData } from './router-data';
import { CssIcon } from '../Components/Icons/CssIcon';
import { HTMLIcon } from '../Components/Icons/HTMLIcon';
import { TSIcon } from '../Components/Icons/TSIcon';
import { JSIcon } from '../Components/Icons/JSIcon';
import { ReactIcon } from '../Components/Icons/ReactIcon';
import { GithubIcon } from '../Components/Icons/GithubIcon';
import { JestIcon } from '../Components/Icons/JestIcon';
import { FirebaseIcon } from '../Components/Icons/FirebaseIcon';
import { VSCIcon } from '../Components/Icons/VSCIcon';
import { DiscordIcon } from '../Components/Icons/DiscordIcon';

import './styles.css';

export function Blocks() {
  // const element = useRoutes(routerData);

  return (
    <div>
      <CssIcon />
      <HTMLIcon />
      <TSIcon />
      <JSIcon />
      <ReactIcon />
      <GithubIcon />
      <JestIcon />
      <FirebaseIcon />
      <VSCIcon />
      <DiscordIcon />
    </div>

    // <>
    //   <BlockLayout />
    //   {element}
    // </>
  );
}
