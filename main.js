import getRandomWord from "./src/randomWord.js";
import setSharkImage from "./src/sharkImage.js";
import "./style.css";
import { setupWord, isLetterInWord, revealLetterInWord } from "./src/word.js";
import setupGuesses from "./src/guess.js";
document.querySelector("#app").innerHTML = ` 
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;

  const word = getRandomWord();
  const handleGuess = (guessEvent, letter) => {
    guessEvent.srcElement.disabled = true;
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(document.querySelector("#shark-img"), numWrong);
    }
    let wordComplete = true;
    document.querySelectorAll(".letter-box").forEach((e) => {
      if (e.innerText === "") {
        wordComplete = false;
      }
    });
    if (wordComplete) {
      document.querySelector("#game-status").innerHTML = "You've won"
      
    }
    if(numWrong == word.length) {
      document.querySelector("#game-status").innerHTML = "You've lost"
      document.querySelectorAll('button').forEach((e) => {
        e.disabled = true
      })
    }
  };

  setupGuesses(document.querySelector("#letter-buttons"), handleGuess);
  setupWord(document.querySelector("#word-container"), word);

  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
