// Function to Load Pets Categories
function loadPetCategories() {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayPetCategories(data.categories))
    .catch((error) => console.log(error));
}

// Remove Active Class from Category buttons
const removeActiveClass =() => {
  const buttons = document.getElementsByClassName("button-category");
  for (let btn of buttons){
    btn.classList.remove("active");
  }
}

// Load Category Pets
const loadCategoryPets = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // Remove active class
      removeActiveClass();
      // Add active class
      const activeBtn = document.getElementById(`btn-${id}`);
      activeBtn.classList.add("active");
      displayLeftCards(data.data)
    })
    .catch((error) => console.log(error));
};

// Load Pet Details
const loadPetDetails = async (petId) => {
  console.log(petId);
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(url)
  const data = await res.json()
  displayPetDetails(data.petData);
};

// Display Pet Details
const displayPetDetails = (petData) => {
  console.log(petData);
  const detailsContainer = document.getElementById("modal-content");

  detailsContainer.innerHTML = `
      <img class="h-full w-full object-cover rounded-xl"
      src=${petData.image}
      alt="Shoes" />
      <div class="px-2 py-2">
            <h1 class="text-xl font-bold">${petData.pet_name}</h1>
      <div class="flex gap-0 lg:gap-3 flex-col lg:flex-row">
      <div>
      <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=46218&format=png"/>Breed: ${
      typeof petData.breed === "undefined" ? "Not Available" : `${petData.breed}`
    }</h4>

    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=80&id=GlEOr5x0aJpH&format=png"/>Date of Birth: ${
      typeof petData.date_of_birth === "undefined" || petData.date_of_birth === null
        ? "Not Known"
        : `${petData.date_of_birth}`
    }</h4>

    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=121&format=png"/>Price: ${
      petData.price === null ? "Stock Out" : `${petData.price}$`
    }</h4>
      </div>
    
    <div>
    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=24&id=B9uZ6V1hUMCF&format=png"/>Gender: ${
      typeof petData.gender === "undefined" ? "Not Known" : `${petData.gender}`
    }</h4>

    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=32&id=19195&format=png"/>Vaccinated Status: ${
      typeof petData.vaccinated_status === "undefined" ? "Not Known" : `${petData.vaccinated_status}`
    }</h4>
    </div>
      </div>
      <div class="divider py-0 my-0"></div>
    <h1 class="text-base font-bold">Details Information</h1>
    <p class="text-sm">${petData.pet_details}</p>
  </div>
  `
  document.getElementById("customModal").showModal();
}

// data.categories[1].category

// {
//   "status": true,
//   "message": "successfully fetched all the categories data",
//   "categories": [
//       {
//           "id": 1,
//           "category": "Cat",
//           "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//       },
//       {
//           "id": 2,
//           "category": "Dog",
//           "category_icon": "https://i.ibb.co.com/c8Yp1y7/dog.png"
//       },
//       {
//           "id": 3,
//           "category": "Rabbit",
//           "category_icon": "https://i.ibb.co.com/3hftmLC/rabbit.png"
//       },
//       {
//           "id": 4,
//           "category": "Bird",
//           "category_icon": "https://i.ibb.co.com/6HHZwfq/bird.png"
//       }
//   ]
// }
// {
//   "status": true,
//   "message": "successfully fetched pets data using category name cat",
//   "data": [
//       {
//           "petId": 2,
//           "breed": "Siamese",
//           "category": "Cat",
//           "date_of_birth": "2022-09-05",
//           "price": 800,
//           "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
//           "gender": "Female",
//           "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
//           "vaccinated_status": "Fully",
//           "pet_name": "Mia"
//       },
//       {
//           "petId": 6,
//           "breed": "Bengal",
//           "category": "Cat",
//           "price": 950,
//           "image": "https://i.ibb.co.com/PFbWMGk/pet-6.jpg",
//           "gender": "Male",
//           "pet_details": "This playful male Bengal cat, born on November 10, 2022, is full of energy and loves to climb and engage with toys. Fully vaccinated and priced at $950, he's ideal for active households looking for a curious and adventurous feline friend.",
//           "vaccinated_status": "Fully",
//           "pet_name": "Leo"
//       },
//       {
//           "petId": 7,
//           "breed": "Bengal",
//           "category": "Cat",
//           "date_of_birth": "2022-11-10",
//           "price": 950,
//           "image": "https://i.ibb.co.com/QXbXctF/pet-7.jpg",
//           "gender": "Male",
//           "pet_details": "This male Bengal cat, born on November 10, 2022, is energetic and playful. He loves exploring, climbing, and playing with interactive toys. Fully vaccinated and priced at $950, he's perfect for anyone looking for an active, intelligent, and lively cat.",
//           "vaccinated_status": null,
//           "pet_name": "Max"
//       },
//       {
//           "petId": 17,
//           "breed": "Maine Coon",
//           "category": "Cat",
//           "date_of_birth": "2022-12-01",
//           "price": 1200,
//           "image": "https://i.ibb.co.com/85w4kSt/pet-17.jpg",
//           "gender": "Male",
//           "pet_details": "This majestic male Maine Coon, born on December 1, 2022, is known for his gentle demeanor and friendly personality. Fully vaccinated and priced at $1200, he's great with families and other pets.",
//           "vaccinated_status": "Fully",
//           "pet_name": "Thor"
//       }
//   ]
// }



// Display Pets Categories
const displayPetCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    // Creating CATEGORY Button
    const buttonContainer = document.createElement("div");

    buttonContainer.innerHTML = `
        <div class="px-2 pt-2 lg:px-24 lg:pt-10">

        <button id="btn-${item.category}" onclick="loadCategoryPets('${item.category}')" class="flex items-center gap-1 px-2 lg:gap-22 border-2 justify-center button-category rounded-md py-2 lg:rounded-full w-auto lg:w-40 font-bold"><img class="w-5 h-5 lg:w-8 lg:h-8" src="${item.category_icon}"/> ${item.category}</button>

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
  leftCardContainer.innerHTML = "";

  if (pets.length === 0) {
    leftCardContainer.classList.remove("grid");
    leftCardContainer.innerHTML = `
    <div class="flex flex-col justify-center items-center pt-10">
        <img src="./images/error.webp"/>
        <h1 class="font-style text-center text-lg lg:text-3xl font-extrabold">No Information Available</h1>
        <p class="text-center px-0 lg:px-24 text-xs lg:text-base">"No information is currently available for this section. Please check back later for updates or contact us for details."</p>
    </div>
    `;
    return;
  }
  else {
    leftCardContainer.classList.add("grid");
  }

  pets.forEach((pet) => {

    const leftSideCards = document.createElement("div");
    leftSideCards.classList = "card card-compact border-2";
    leftSideCards.innerHTML = `
  <figure class="h-60 px-2 py-2">
    <img class="h-full w-full object-cover rounded-xl"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="px-2 py-2">
    <h1 class="text-xl font-bold">${pet.pet_name}</h1>

    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=46218&format=png"/>Breed: ${
      typeof pet.breed === "undefined" ? "Not Available" : `${pet.breed}`
    }</h4>

    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=80&id=GlEOr5x0aJpH&format=png"/>Date of Birth: ${
      typeof pet.date_of_birth === "undefined" || pet.date_of_birth === null
        ? "Not Known"
        : `${pet.date_of_birth}`
    }</h4>

    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=121&format=png"/>Price: ${
      pet.price === null ? "Stock Out" : `${pet.price}$`
    }</h4>
    
    <h4 class="flex items-center gap-1"><img class="w-4 h-4" src="https://img.icons8.com/?size=24&id=B9uZ6V1hUMCF&format=png"/>Gender: ${
      typeof pet.gender === "undefined" ? "Not Known" : `${pet.gender}`
    }</h4>
  </div>

  <div class="flex items-center justify-between px-3 py-2">
  <button class="border-2 px-3 py-1 rounded-lg "><img src='https://img.icons8.com/?size=24&id=82788&format=png'/></button>
  <button class="border-2 px-3 py-1 rounded-lg text-[#0E7A81] font-semibold">Adopt</button>
  <button onclick="loadPetDetails('${pet.petId}')" class="border-2 px-3 py-1 rounded-lg text-[#0E7A81] font-semibold">Details</button>
  </div>
    `;
    leftCardContainer.append(leftSideCards);
  });
};

loadPetCategories();
loadLeftCards();
