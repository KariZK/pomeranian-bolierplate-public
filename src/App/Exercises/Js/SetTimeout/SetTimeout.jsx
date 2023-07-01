import { useState } from 'react';
import './styles.css';


// setTimeout(() => {
//   console.log('this is the first message');
// }, 5000);
// setTimeout(() => {
//   console.log('this is the second message');
// }, 3000);

// export function SetTimeout ()  {
// const [seconds, setSeconds] = useState(60);
// useEffect(()=>{
//   const timer = setInterval(()  => {
//     setSecond
//   })
//   if (seconds < 0) {
//     clearInterval
// setInterval(() =>)

// }, [seconds])

//   return

//   </><div>SetTimeout</div>;
// };

export const SetTimeout = () => {
  const initialState = { fontState: '16px', trasitions: 'all 5s' };
 const [style, setStyle] = useState(initialState);
const onClickHandle = () => {
  setStyle((prev) => ({...prev, fontSize: '100px' }));
};

  return (
<div>
<button onClick={onClickHandle}>ssss</button>;
</div>
);
}

