import { PersonalCardIcon } from '../../Components/Icons/PersonalCardIcon';
import { RightArrowIcon } from '../../Components/Icons/RightArrowIcon';

export const BlockCV = () => {
  return (
    <div className="block-cv">
      <div className="block-title">Moje cv</div>
      <div className="block-icon">
        <PersonalCardIcon />
      </div>
      <div className="block-text">podgląd cv wraz z doświadczeniem</div>
      <br />
      <div className="block-more">
        zobacz więcej <RightArrowIcon className="block-more-icon" />
      </div>
    </div>
  );
};
