import './styles.css';

const height = '1088px';
const width = '1920px';

const text =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor kurde at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin kurde words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes kurde from a line in section 1.10.32.';

let heightpxIndex = height.indexOf('px');
let widthpxIndex = width.indexOf('px');

let heightInNumbers = height.substring(0, heightpxIndex);
let widthInNumbers = width.substring(0, widthpxIndex);

function calculatePixels() {
  return heightInNumbers * widthInNumbers;
}

function changeOnMegapixels() {
  return calculatePixels() / 1000000;
}

export function EmptyValuesAndComments() {
  return (
    <div>
      <div>Ilość pixeli: {calculatePixels()} px</div>
      <div>Ilosć megapixeli: {changeOnMegapixels()} mpx</div>
      <div>{text.replaceAll('kurde', 'kurcze')}</div>
    </div>
  );
}
