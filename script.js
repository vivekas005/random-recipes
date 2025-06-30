const recipes = [
  {
    name: "🍕 Pizza Margherita",
    desc: "Classic Italian pizza with tomatoes, mozzarella & basil.",
    link: "https://www.vegrecipesofindia.com/margherita-pizza-recipe/"
  },
  {
    name: "🍜 Veggie Noodles",
    desc: "Quick stir-fried noodles with vegetables and soy sauce.",
    link: "https://www.indianhealthyrecipes.com/veg-noodles-recipe/"
  },
  {
    name: "🥗 chicken Salad",
    desc: "Healthy and crunchy salad with a creamy dressing.",
    link: "https://www.allrecipes.com/recipe/8499/basic-chicken-salad/"
  }
  {
    name: "🍩 Homemade Donuts",
    desc: "Soft, fluffy donuts glazed with sugar and love.",
    link: "https://sallysbakingaddiction.com/how-to-make-homemade-glazed-doughnuts/"
  }
  
  
];

function generateRecipe() {
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  document.getElementById("recipe-name").textContent = random.name;
  document.getElementById("recipe-desc").textContent = random.desc;
  const link = document.getElementById("recipe-link");
  link.href = random.link;
  link.style.display = "inline-block";
}
