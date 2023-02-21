function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");

const changeColor = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

changeColor.addEventListener("click", changeBgColor);

function changeBgColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = getRandomHexColor();
}
