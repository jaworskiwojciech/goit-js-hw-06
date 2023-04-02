function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
const boxesContainer = document.getElementById("boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

const createBoxes = (amount) => {
  boxesContainer.innerHTML = "";

  let dimension = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${dimension}px`;
    box.style.height = `${dimension}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;

    boxesContainer.append(box);
    dimension += 10;
  }
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);
