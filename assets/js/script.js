// use Jung's code to get around the CORS issue
const url = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + 'www.thecocktaildb.com/api/json/v1/1/random.php'

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (drinksData) {
    
    // console log data to work out the data structure
    console.log(drinksData);
    // console log various bits of data from the JSON
    console.log('Drink Name:', drinksData.drinks[0].strDrink);
    console.log('Drink Type:', drinksData.drinks[0].strAlcoholic);
    console.log('Category:', drinksData.drinks[0].strCategory);    
    console.log('Recipe:', drinksData.drinks[0].strInstructions);
    console.log('Thumbnail:', drinksData.drinks[0].strDrinkThumb);

    // update HTML elements with drink information
    document.getElementById('drinkName').innerText = `Drink Name: ${drinksData.drinks[0].strDrink}`
    document.getElementById('drinkType').innerText = `Drink Type: ${drinksData.drinks[0].strAlcoholic}`
    document.getElementById('category').innerText = `Category: ${drinksData.drinks[0].strCategory}`   
    document.getElementById('recipe').innerText = `Recipe: ${drinksData.drinks[0].strInstructions}`
    // update the thumbnail image in the HTML element
    const thumbNailElement = document.getElementById('thumbnail');
    thumbNailElement.src = drinksData.drinks[0].strDrinkThumb;

    
    // ingredient lists vary in size per drink. the below code loops through the array to extract each one

    // HTML element where ingredient information will be displayed
    const drinksSection = document.getElementById('ingredient')
    // loop through the array to extract and display ingredients
    for (let i = 0; i <= 14; i++) {
        const ingredientKey = `strIngredient${i}`;    
        const ingredient = drinksData.drinks[0][ingredientKey];        
        // check if ingredients are listed, ignore if null
        if (ingredient ) {
            // console log ingredients
            console.log(`Ingredients ${i}: ${ingredient}`);
            // create a new div for each ingredient found
            const ingredientContainer = document.createElement('div');            
            ingredientContainer.innerText = `Ingredients ${i}: ${ingredient}`;
            // append it to the ingredient id in the HTML element 
            drinksSection.appendChild(ingredientContainer)
        }
    }
  })



 