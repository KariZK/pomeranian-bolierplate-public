import './Playground.css';
import { MoleIcon } from '../../../../Components/Icons/MoleIcon';
import { useState, useEffect } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

const fields = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
  { id: 9, hasClicked: false },
  { id: 10, hasClicked: false },
];

export const Playground = ({ score, setScore }) => {
  // const randomIndex = getRandomInt(10);

  // const fieldsWithRandomIndex = fields.map((field) => {
  //   return {
  //     ...field,
  //     isMolePresent: field.id === randomIndex,
  //   };
  // });

  //-----------------------------------------

  const [modifiedFields, setModifiedFields] = useState(fields);
  const [fieldWithMoleId, setFieldWithMoleId] = useState(getRandomInt(10));

  useEffect(() => {
    setInterval(() => {
      const newRandomIndex = getRandomInt(10);
      setFieldWithMoleId(newRandomIndex);
    }, 1000);
  }, []);

  const resetClickFlags = () => {
    setTimeout(() => {
      setModifiedFields(
        modifiedFields.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleScoreUpdate = (isMolePresentFlag) => {
    if (isMolePresentFlag) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleClick = (clickedField, isMolePresentFlag) => {
    setModifiedFields(
      modifiedFields.map((field) => {
        return {
          ...field,
          hasClicked: clickedField.id === field.id,
        };
      })
    );

    resetClickFlags();

    handleScoreUpdate(isMolePresentFlag);
  };

  return (
    <div className="playground">
      {modifiedFields.map((field) => {
        const isMolePresent = field.id === fieldWithMoleId;

        const isClickedFieldWithMole =
          isMolePresent && field.hasClicked ? 'field-green' : '';
        const isClickedFieldWithoutMole =
          !isMolePresent && field.hasClicked ? ' field-red' : '';

        return (
          <button
            className={`field ${isClickedFieldWithMole}${isClickedFieldWithoutMole}`}
            key={field.id}
            onClick={() => handleClick(field, isMolePresent)}
          >
            {isMolePresent && <MoleIcon />}
          </button>
        );
      })}
    </div>
  );
};
