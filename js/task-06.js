const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");
console.log(inputLength);
input.addEventListener("blur", checkLength);

function checkLength(event) {
  if (event.currentTarget.value.length == inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
