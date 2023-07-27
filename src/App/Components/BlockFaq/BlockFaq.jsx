import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { RightArrowIcon } from '../Icons/RightArrowIcon';

export const BlockFaq = () => {
  return (
    <div className="block-cv">
      <div className="block-title">FAQ</div>
      <div className="block-icon-dash">
        <PersonalCardIcon />
      </div>
      <div className="block-text">odpowiedzi na najczęstsze pytania</div>
      <div className="block-more">zobacz więcej &#xf054;</div>
    </div>
  );
};
