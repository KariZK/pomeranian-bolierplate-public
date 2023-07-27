import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { RightArrowIcon } from '../Icons/RightArrowIcon';

export const BlockExercise = () => {
  return (
    <div className="block-cv">
      <div className="block-title">Ćwiczenia</div>
      <div className="block-icon-dash">
        <PersonalCardIcon />
      </div>
      <div className="block-text">wszystkie wykonane ćwiczenia</div>
      <div className="block-more">zobacz więcej &#xf054;</div>
    </div>
  );
};
