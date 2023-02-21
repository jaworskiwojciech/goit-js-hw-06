const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");

function newInput(element) {
    mySpan.textContent = element.currentTarget.value;

    if (element.currentTarget.value === "") {
        mySpan.textContent = "Anonymous"
    };
}

myInput.addEventListener('input', newInput);