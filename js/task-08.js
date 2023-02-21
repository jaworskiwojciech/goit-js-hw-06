const loginForm = document.querySelector(".login-form");

function checkSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Proszę wypełnić wszystkie pola!");
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

loginForm.addEventListener("submit", checkSubmit);
