// Function to Load Pets Categories
function loadPetCategories(){
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
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
        `

        categoryContainer.append(buttonContainer);
    })
}





loadPetCategories();