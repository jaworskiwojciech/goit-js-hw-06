const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

const textSizing = (event) => {
  text.style.fontSize = `${event.target.value}px`;
};

input.addEventListener("input", textSizing);
