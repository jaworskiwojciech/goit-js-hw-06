const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");

function newInput(event) {
  mySpan.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    mySpan.textContent = "Anonymous";
  }
}

myInput.addEventListener("input", newInput);
