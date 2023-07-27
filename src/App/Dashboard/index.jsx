import { MyData } from '../Components/MyData/MyData';
import { BlockCV } from '../Components/BlockCV/BlockCV';
import { BlockTechStack } from '../Components/BlockTechStack/BlockTechStack';
import { BlockExercise } from '../Components/BlockExercise/BlockExercise';
import { BlockForm } from '../Components/BlockForm/BlockForm';
import { BlockFaq } from '../Components/BlockFaq/BlockFaq';
import { HandIcon } from '../Components/Icons/HandIcon';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1 className="dashboard-hi">
          {' '}
          <HandIcon /> Hej, tu Karina!
        </h1>
        <p>
          Poniżej zaniajdziesz najważniejsze informacje na temat mojej
          działalności.
        </p>


        <div>
          <div className="dashboard-blocks">
            <BlockCV /> <BlockTechStack /> <BlockExercise />
          </div>
          <div className="dashboard-blocks">
            <BlockForm /> <BlockFaq />
          </div>
        </div>
      </div>

      <div className="dashboard-data">
        <MyData />
      </div>
    </div>
  );
};
