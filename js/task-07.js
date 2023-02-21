const fontControler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontControler.addEventListener("input", sizing);

function sizing(e) {
  text.style.fontSize = `${e.target.value}px`;
}
