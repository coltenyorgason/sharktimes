let word;

function setupWord(initWord, element) {
  word = initWord;
  word.split('').forEach(() => {
    element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
  });
}

function isLetterInWord(letter) {
  return word.includes(letter);
}

function revealLetterInWord(letter) {
  const letterBox = document.querySelectorAll(".letter-box");
  word.split("").forEach((e, i) => {
    if (e === letter) {
      letterBox[i].innerHTML = letter;
    }
  });
}
export { setupWord, isLetterInWord, revealLetterInWord };
