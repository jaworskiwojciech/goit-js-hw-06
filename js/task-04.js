let counterValue = 0;

const incrementation = document.querySelector(
  "button[data-action='increment']"
);
const decrementation = document.querySelector(
  "button[data-action='decrement']"
);
const resultValue = document.querySelector("#value");

const countIncr = function () {
  counterValue += 1;
  resultValue.textContent = counterValue;
};

const countDecr = function () {
  counterValue -= 1;
  resultValue.textContent = counterValue;
};

incrementation.addEventListener("click", countIncr);
decrementation.addEventListener("click", countDecr);
