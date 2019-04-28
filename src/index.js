import readlineSync from 'readline-sync';

const numberOfIterations = 3;
const userName = readlineSync.question('May I have your name?  ');

const startGame = (getGameData, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log(message);
  const iter = (count) => {
    if (count === numberOfIterations) {
      console.log(`Congratulations, ${userName}!`);
      replay();
      return;
    }
    const gameData = getGameData();
    const userAnswer = readlineSync.question(`Question: ${gameData.question} `);
    console.log(`Your answer: ${userAnswer}`);

    if (gameData.answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      replay();
      return;
    }
    iter(count + 1);
  };

  const replay = () => {
    const answerReplay = readlineSync.question('To play again? (yes/no) ');

    if (answerReplay === 'yes') {
      const answerReplaySameGame = readlineSync.question('Play the same game? (yes/no) ');
      if (answerReplaySameGame === 'yes') {
        iter(0);
      } else {
        console.log('Choose a game from the list and just enter the name of the game!\nbrain-calc\nbrain-even\nbrain-gcd\nbrain-prime\nbrain-progression');
        return;
      }
    } else {
      console.log('Game over!\nBye-Bye!');
    }
  };

  iter(0);
};

export default startGame;
