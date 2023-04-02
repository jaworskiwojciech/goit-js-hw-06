const spanColor = document.querySelector(".color");
const colorBtn = document.querySelector("button");
const body = document.querySelector("body");



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSwitch = () => {
  const randomColor = `${getRandomHexColor()}`;
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
};

colorBtn.addEventListener("click", colorSwitch);
