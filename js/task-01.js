const category = document.querySelectorAll(".item");
const numberOfCategories = category.length;
console.log(numberOfCategories);

const titles = document.querySelectorAll("h2");
titles.forEach((title) => {
  console.log(title.textContent);
  console.log(title.nextElementSibling.children.length);
});
