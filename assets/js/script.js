// // random drink api call
// const randomurl = 'https://thecocktaildb.com/api/json/v1/1/random.php'

//  fetch(randomurl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (drinksData) {
//       // console log data to work out the data structure
//       console.log(drinksData);
//       // console log various bits of data from the JSON
//       console.log('Drink Name:', drinksData.drinks[0].strDrink);
//       console.log('Drink Type:', drinksData.drinks[0].strAlcoholic);
//       console.log('Category:', drinksData.drinks[0].strCategory);
//       console.log('Recipe:', drinksData.drinks[0].strInstructions);
//       console.log('Thumbnail:', drinksData.drinks[0].strDrinkThumb);

//       // update HTML elements with drink information
//       document.getElementById('drinkName').textContent = `Drink Name: ${drinksData.drinks[0].strDrink}`;
//       document.getElementById('drinkType').textContent = `Drink Type: ${drinksData.drinks[0].strAlcoholic}`;
//       document.getElementById('category').textContent = `Category: ${drinksData.drinks[0].strCategory}`;
//       document.getElementById('recipe').textContent = `Recipe: ${drinksData.drinks[0].strInstructions}`;
//       // update the thumbnail image in the HTML element
//       const thumbNailElement = document.getElementById('thumbnail');
//       thumbNailElement.src = drinksData.drinks[0].strDrinkThumb;

//       // ingredient lists vary in size per drink. the below code loops through the array to extract each one

//       // HTML element where ingredient information will be displayed
//       const drinksSection = document.getElementById('ingredient');
//       // loop through the array to extract and display ingredients
//       for (let i = 0; i <= 14; i++) {
//         const ingredientKey = `strIngredient${i}`;
//         const ingredient = drinksData.drinks[0][ingredientKey];
//         // check if ingredients are listed, ignore if null
//         if (ingredient) {
//           // console log ingredients
//           console.log(`Ingredients ${i}: ${ingredient}`);
//           // create a new div for each ingredient found
//           const ingredientContainer = document.createElement('div');
//           ingredientContainer.textContent = `Ingredients ${i}: ${ingredient}`;
//           // append it to the ingredient id in the HTML element
//           drinksSection.appendChild(ingredientContainer);
//         }
//       }
//     });

// // listen for any input that is entered into the search box
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('search-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const drinkInput = document.getElementById('author-search').value;
//     getDrinkData(drinkInput);
//   });
// });
 
// // function to display the drink the user searches for
// function getDrinkData(drinkInput) {

//   // drink search api call
// const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkInput 

// fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (drinksData) {
//       // console log data to work out the data structure
//       console.log(drinksData);
//       // console log various bits of data from the JSON
//       console.log('Drink Name:', drinksData.drinks[0].strDrink);
//       console.log('Drink Type:', drinksData.drinks[0].strAlcoholic);
//       console.log('Category:', drinksData.drinks[0].strCategory);
//       console.log('Recipe:', drinksData.drinks[0].strInstructions);
//       console.log('Thumbnail:', drinksData.drinks[0].strDrinkThumb);

//       // update HTML elements with drink information
//       document.getElementById('drinkName').textContent = `Drink Name: ${drinksData.drinks[0].strDrink}`;
//       document.getElementById('drinkType').textContent = `Drink Type: ${drinksData.drinks[0].strAlcoholic}`;
//       document.getElementById('category').textContent = `Category: ${drinksData.drinks[0].strCategory}`;
//       document.getElementById('recipe').textContent = `Recipe: ${drinksData.drinks[0].strInstructions}`;
//       // update the thumbnail image in the HTML element
//       const thumbNailElement = document.getElementById('thumbnail');
//       thumbNailElement.src = drinksData.drinks[0].strDrinkThumb;

//       // ingredient lists vary in size per drink. the below code loops through the array to extract each one

//       // HTML element where ingredient information will be displayed
//       const drinksSection = document.getElementById('ingredient');
//       // clear ingredients from screen
//       drinksSection.innerHTML = '';

//       // loop through the array to extract and display ingredients
//       for (let i = 0; i <= 14; i++) {
//         const ingredientKey = `strIngredient${i}`;
//         const ingredient = drinksData.drinks[0][ingredientKey];
//         // check if ingredients are listed, ignore if null
//         if (ingredient) {
//           // console log ingredients
//           console.log(`Ingredients ${i}: ${ingredient}`);
//           // create a new div for each ingredient found
//           const ingredientContainer = document.createElement('div');
//           ingredientContainer.textContent = `Ingredients ${i}: ${ingredient}`;
//           // append it to the ingredient id in the HTML element
//           drinksSection.appendChild(ingredientContainer);
//         };
//       };
//     });
//   };


// Listen for any input that is entered into the search box
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const authorName = document.getElementById('author-search').value;
    searchAuthorName(authorName);
  });
});

// ## Open Library code ##
function searchAuthorName(authorName) {
  const authorAPI = 'https://openlibrary.org/search/authors.json?q=';

  // Fetch author information
  fetch(authorAPI + authorName)
    .then(function (response) {
      return response.json();
    })
    .then(function (authorData) {
      displayAuthorInformation(authorData);
    });
  // Call the function to fetch random drink information
  fetchRandomDrinkInformation();
}

function displayAuthorInformation(authorData) {
  // Console log data to work out the data structure
  console.log(authorData);

  // Pull top work of the author into the HTML element
  document.getElementById('topWork').textContent = `Top Work: ${authorData.docs[0].top_work}`;

  var key = authorData.docs[0].key;
  const authorKeyAPI = `https://openlibrary.org/authors/${key}.json`;

  // Fetch additional author information using the obtained key
  fetch(authorKeyAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (authorKey) {
      console.log(authorKey.bio);
      document.getElementById('name').textContent = `Author: ${authorKey.name}`;
      document.getElementById('dob').textContent = `Date of Birth: ${authorKey.birth_date}`;
      document.getElementById('bio').textContent = `Bio: ${authorKey.bio}`;
    });
}

function fetchRandomDrinkInformation() {
  // Random drink API call
  const randomDrink = 'https://thecocktaildb.com/api/json/v1/1/random.php';

  fetch(randomDrink)
    .then(function (response) {
      return response.json();
    })
    .then(function (drinksData) {
      displayDrinkInformation(drinksData);
    });
}

function displayDrinkInformation(drinksData) {
  // Console log data to work out the data structure
  console.log(drinksData);

  // Console log various bits of data from the JSON
  console.log('Drink Name:', drinksData.drinks[0].strDrink);
  console.log('Drink Type:', drinksData.drinks[0].strAlcoholic);
  console.log('Category:', drinksData.drinks[0].strCategory);
  console.log('Recipe:', drinksData.drinks[0].strInstructions);
  console.log('Thumbnail:', drinksData.drinks[0].strDrinkThumb);

  // Update HTML elements with drink information
  document.getElementById('drinkName').textContent = `Drink Name: ${drinksData.drinks[0].strDrink}`;
  document.getElementById('drinkType').textContent = `Drink Type: ${drinksData.drinks[0].strAlcoholic}`;
  document.getElementById('category').textContent = `Category: ${drinksData.drinks[0].strCategory}`;
  document.getElementById('recipe').textContent = `Recipe: ${drinksData.drinks[0].strInstructions}`;

  // Update the thumbnail image in the HTML element
  const thumbNailElement = document.getElementById('thumbnail');
  thumbNailElement.src = drinksData.drinks[0].strDrinkThumb;

  // Ingredient lists vary in size per drink. The below code loops through the array to extract each one

  // HTML element where ingredient information will be displayed
  const drinksSection = document.getElementById('ingredient');

  // Loop through the array to extract and display ingredients
  for (let i = 0; i <= 14; i++) {
    const ingredientKey = `strIngredient${i}`;
    const ingredient = drinksData.drinks[0][ingredientKey];

    // Check if ingredients are listed, ignore if null
    if (ingredient) {
      // Console log ingredients
      console.log(`Ingredients ${i}: ${ingredient}`);
      // Create a new div for each ingredient found
      const ingredientContainer = document.createElement('div');
      ingredientContainer.textContent = `Ingredients ${i}: ${ingredient}`;
      // Append it to the ingredient id in the HTML element
      drinksSection.appendChild(ingredientContainer);
    }
  }
}
