// Function to Load Pets Categories
function loadPetCategories() {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayPetCategories(data.categories))
    .catch((error) => console.log(error));
}

// Display Pets Categories
const displayPetCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    console.log(item);
    // Creating Button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
        <div class="px-2 pt-2 lg:px-24 lg:pt-10">
        <button class="btn button-category rounded-md py-1 lg:rounded-full w-auto lg:w-40 font-bold"><img class="w-5 h-5 lg:w-8 lg:h-8" src="${item.category_icon}"/> ${item.category}</button>
        </div>
        `;

    categoryContainer.append(buttonContainer);
  });
};

// Load Left Cards
const loadLeftCards = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayLeftCards(data.pets))
    .catch((error) => console.log(error));
};

// Display Left Cards
const displayLeftCards = (pets) => {
  const leftCardContainer = document.getElementById("left-card-container");

  pets.forEach((pet) => {
    console.log(pet);

    const leftSideCards = document.createElement("div");
    leftSideCards.classList = "card card-compact border-2";
    leftSideCards.innerHTML = `
  <figure class="h-60">
    <img class="h-full w-full object-cover"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="px-2 py-2">
    <h1 class="text-lg font-bold">${pet.breed}</h1>
    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=46218&format=png"/>Category: ${pet.category}</h4>
    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=80&id=GlEOr5x0aJpH&format=png"/>Date of Birth: ${pet.date_of_birth}</h4>
    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=121&format=png"/>Price: ${pet.price}</h4>
    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=24&id=B9uZ6V1hUMCF&format=png"/>Gender: ${pet.gender}</h4>
  </div>
    `;

    leftCardContainer.append(leftSideCards);
  });
};

loadPetCategories();
loadLeftCards();
