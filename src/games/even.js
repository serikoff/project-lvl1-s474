import startGame from '../index';
import getRandom from '../utils';

const message = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const startBrainEven = () => {
  const getGameData = () => {
    const question = getRandom(1, 20);
    const gameData = {};
    gameData.answer = isEven(question) ? 'yes' : 'no';
    gameData.question = question;
    return gameData;
  };

  startGame(getGameData, message);
};

export default startBrainEven;
