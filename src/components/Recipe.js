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

const InstructionList = [
    {index: 0, list: ["Step 1", "Step 2", "Step 3", "Step 4", "And so on..."]},
    {index: 1, list: ["Add Fettuccine pasta to boiling water, along with a pinch of salt", "When the pasta is cooked, remove the cooked pasta and add Alfredo sauce", "Add some of the flavorful pasta water to change the sauce's consistency", "Finish with Parmesan cheese and red pepper flakes"]},
    {index: 2, list: ["Add a splash of olive oil to coat the salmon", "Wrap salmon fillet in aluminum foil and place in oven at 375 degrees Fahrenheit", "Grill for 5 minutes on the first side, then flip and grill 3 minutes on the other side", "Squeeze fresh lemon and lime juice for flavor onto the salmon", "Add salt, pepper, and chaat masala as desired!"]},
    {index: 3, list: ["Lightly coat the tortillas with butter/oil", "Place a tortilla in a skillet", "When warm, add cheese and continue cooking until melted", "Fold the tortilla and slice", "Repeat this process for all tortillas"]},
    {index: 4, list: ["Step 1", "Step 2", "Step 3", "Step 4", "And so on..."]},
    {index: 5, list: ["Roll out pizza dough into the shape of a circular tray", "Add barbecue sauce to pizza dough and spread evenly", "Evenly spread diced red and green peppers as well", "Cook chicken breast in air fryer for eight minutes", "Bake pizza at 375 degrees for 15 minutes", "Add cooked chicken to pizza", "Top with a generous amount of red pepper flakes"]},
    {index: 6, list: ["Add romaine lettuce, cucumber, spinach, croutons, and caesar dressing to bowl", "Toss ingredients together", "Sprinkle parmesan cheese on top", "Add cooked chicken breast, if desired"]},
    {index: 7, list: ["Dice the roma tomatoes", "Slice the jalapeno in thirds", "Now, you may either combine all ingredients into a bowl or add them to a blender for a liquid salsa."]},
    {index: 8, list: ["Wash potatoes and slice them into smaller french fry shapes (around 1/2 inch thick)", "Heat cooking oil in large skillet over medium/high heat", "Add french fries, fry for 10 minutes", "When complete, take fries out of oil and pat with paper towel to remove excess oil", "Season with salt (or other seasonings)"]},
    {index: 9, list: ["Step 1", "Step 2", "Step 3", "Step 4", "And so on..."]},
    {index: 10, list: ["Step 1", "Step 2", "Step 3", "Step 4", "And so on..."]},
    {index: 11, list: ["Step 1", "Step 2", "Step 3", "Step 4", "And so on..."]}
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
                    {InstructionList[props.recipe_idx].list.map((instruction) => (
                        <>
                            <li>{instruction}</li>
                        </>
                    ))}
            </ol>

            {/* <p style={{paddingLeft: "2.5%", paddingRight: "2.5%"}}>Can potentially include pictures of the recipe at major steps and a picture of the final product as well!</p>
            <p style={{textIndent: "2.5%"}}>Potentially adding videos also?</p> */}
            
        </div>
    )
}
export default Recipe;