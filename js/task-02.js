const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUL = document.getElementById("ingredients");

console.log(ingredientsUL);

const listElements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add(`item`);
  return element;
});

ingredientsUL.append(...listElements);

// const listItem = document.createElement
