import { check } from 'prettier';
import './styles.css';

const obj = {
  name: 'dog',

  legs: 4,

  color: 'white',
};

export function JsFunctions() {
  const animal = ({ name, legs }) => {
    return `This ${name} have ${legs} legs!`;
    // return 'This' + name + 'have' + llegs +'legs!';
  };

  return <div>{animal(obj)}</div>;
}
