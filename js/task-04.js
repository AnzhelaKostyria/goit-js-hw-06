const incrBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const counterValue = document.querySelector("#value");
const increase = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const decrease = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};
incrBtn.addEventListener("click", increase);
decrBtn.addEventListener("click", decrease);
