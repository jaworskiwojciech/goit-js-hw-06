const input = document.querySelector("#name-input");
const outputSpan = document.querySelector("#name-output");

const inputValue = (event) => {
  outputSpan.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    outputSpan.textContent = "Anonymous";
  }
};

input.addEventListener("input", inputValue);
