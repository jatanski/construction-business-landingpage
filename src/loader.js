const headerCursor = document.querySelector(".loader__header-cursor");
const headerText = document.querySelector(".loader__header-text");

let indexText = 0;
const txt = "Pozwól sobie na wymarzony dom.";
const time = 80;

const addLetter = () => {
  headerText.innerText += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};

const blinkCursor = () => {
  headerCursor.classList.toggle("active");
};

export const inverval = setInterval(blinkCursor, 500);
export const indexTyping = setInterval(addLetter, time);
