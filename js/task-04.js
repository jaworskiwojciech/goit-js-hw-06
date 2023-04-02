const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.getElementById("value");

let counter = 0;

const incr = () => {
  counter++;
  value.textContent = counter;
};

const decr = () => {
  counter--;
  value.textContent = counter;
};

incrementBtn.addEventListener("click", incr);
decrementBtn.addEventListener("click", decr);
