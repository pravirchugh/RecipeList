import React from "react";

const RecipeInfo = [
    {name: "Chicken Tikka", course: "main", index: 0},
    {name: "Fettuccine Alfredo", course: "main", index: 1},
    {name: "Grilled Salmon", course: "main", index: 2},
    {name: "Quesadillas", course: "main", index: 3},
    {name: "Vegetable Sushi", course: "main", index: 4},
    {name: "BBQ Chicken Pizza", course: "main", index: 5},
    {name: "Caesar Salad", course: "side", index: 6},
    {name: "Chips and Homemade Salsa", course: "side", index: 7},
    {name: "French Fries", course: "side", index: 8},
    {name: "Pound Cake", course:"dessert", index: 9},
    {name: "Flan", course: "dessert", index: 10},
    {name: "Gulab Jamun", course: "dessert", index: 11}
];
const IngredientList = [
    {index: 0, list: ["1/2 cup of greek yogurt", "4 chicken breasts", "2 cloves of garlic", "1 tablespoon of minced ginger", "Lemon juice", "Vegetable oil", "2 tablespoons of Coriander", "Spice mixture, including coriander, turmeric, cumin, paprika, chili powder, cinnamon, salt/pepper and chaat masala"]},
    {index: 1, list: ["1 medium-sized box of Fettuccine pasta", "1/2 jar of Alfredo sauce", "A dash of parmesan cheese", "A tablespoon of red pepper flakes"]},
    {index: 2, list: ["1 medium-sized salmon fillet", "1/2 of a lemon", "1/2 of a lime", "Salt/pepper for seasoning", "Olive oil", "1 teaspoon of chaat masala"]},
    {index: 3, list: ["1/2 cup of cheddar cheese", "4 small flour tortillas", "A small piece of butter or olive oil"]},
    {index: 4, list: ["Seaweed", "Steamed rice", "Spinach", "Cucumber", "Carrots", "Avocado", "Soy sauce and wasabi"]},
    {index: 5, list: ["1 serving of pizza dough", "1 1/2 cups of diced chicken breast", "1/2 cup of barbecue sauce", "1/2 cup of red pepper", "1/2 cup of green pepper", "A healthy amount of red pepper flakes"]},
    {index: 6, list: ["1 1/2 cups of Romaine Lettuce", "1/2 cup of cucumber", "1/2 cup of spinach", "1/2 cup of Parmesan Cheese", "1/4 cup of croutons", "1/4 cup of caesar dressing", "Optional: 1/2 cup of chicken breast"]},
    {index: 7, list: ["4 medium-sized Roma tomatoes", "A dash of olive oil", "1 diced white onion", "1 jalapeno", "1 teaspoon of salt"]},
    {index: 8, list: ["A few medium-sized potatoes", "1 quart of vegetable oil", "Salt for seasoning"]},
    {index: 9, list: ["3/4 cup of unflavored butter", "1 1/2 cups of flour", "1 cup of sugar", "3 eggs", "1 1/2 teaspoons of vanilla extract", "3 tablespoons of milk", "1 teaspoon of baking powder", "A pinch of salt"]},
    {index: 10, list: ["3/4 cup of sugar", "3 large eggs", "1 tablespoon of vanilla extract", "1 can of condensed milk", "1 can of evaporated milk"]},
    {index: 11, list: ["3/4 cup of milk powder", "1/2 cup of flour", "1/2 teaspoon of baking powder", "2 tablespoons of ghee", "For preparation/frying: milk and oil", "2 cups of sugar", "2 cups of water", "1 teaspoon of lemon juice", "1 teaspoon of rose water", "1/4 teaspoon of saffron"]},
    
];

function Recipe(props){
    return (
        <div className="recipeIngredientsAndSteps">
            <br></br>
            {/* <p style={{padding: "5px"}}>{RecipeInfo[props.recipe_idx].name} " additional placeholder text to see how far the container can hold paragraph based text"</p> */}

            {/* This is where the recipe main information needs to be stored, potentially in the following format */}
            <br></br>
            <h3 style={{textAlign: "center"}}>{RecipeInfo[props.recipe_idx].name}</h3>
            <h4 style={{textAlign: "left", paddingLeft: "1%", marginBottom: "0px"}}>Ingredients: </h4>
            <ul>
                
                    {IngredientList[props.recipe_idx].list.map((ingredient) => (
                        <>
                            <li>{ingredient}</li>
                        </>
                    ))}
            </ul>
            
            <h4 style={{textAlign: "left", paddingLeft: "1%", marginBottom: "0px"}}>Instructions: </h4>
            <ol>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
                <li>And so on</li>
            </ol>

            {/* <p style={{paddingLeft: "2.5%", paddingRight: "2.5%"}}>Can potentially include pictures of the recipe at major steps and a picture of the final product as well!</p>
            <p style={{textIndent: "2.5%"}}>Potentially adding videos also?</p> */}
            
        </div>
    )
}
export default Recipe;