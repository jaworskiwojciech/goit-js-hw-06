const categories = document.getElementById("categories");
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.children.length}`);

// console.log(items);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
