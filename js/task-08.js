const loginForm = document.querySelector(".login-form");
console.log(loginForm);
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const emailForm = form.elements.email.value;
  console.log(emailForm);
  const passwordForm = form.elements.password.value;
  console.log(passwordForm);
  const formValue = {};
  if (emailForm === "" || passwordForm === "") {
    return console.log("Please fill in all the fields!");
  } else {
    formValue.email = emailForm;
    formValue.password = passwordForm;
    console.log(formValue);
    event.target.reset();
  }
}
