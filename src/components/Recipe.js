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
    {index: 0, list: ["test"]},
    {index: 1, list: ["test"]},
    {index: 2, list: ["test"]},
    {index: 3, list: ["test"]},
    {index: 4, list: ["test"]},
    {index: 5, list: ["test"]},
    {index: 6, list: ["test"]},
    {index: 7, list: ["4 medium-sized Roma tomatoes", "A dash of olive oil", "1 diced white onion", "1 jalapeno", "1 teaspoon of salt"]},
    {index: 8, list: ["A few medium-sized potatoes", "1 quart of vegetable oil", "Salt for seasoning"]},
    {index: 9, list: ["test"]},
    {index: 10, list: ["test"]},
    {index: 11, list: ["test"]},
    
];

function Recipe(props){
    return (
        <div className="recipeIngredientsAndSteps">
            <br></br>
            <p style={{padding: "5px"}}>{RecipeInfo[props.recipe_idx].name} " additional placeholder text to see how far the container can hold paragraph based text"</p>

            {/* This is where the recipe main information needs to be stored, potentially in the following format */}
            <br></br>
            <h3 style={{textAlign: "center"}}>{RecipeInfo[props.recipe_idx].name}</h3>
            <ul>
                
                    {IngredientList[props.recipe_idx].list.map((ingredient) => (
                        <>
                            <li>{ingredient}</li>
                        </>
                    ))}
            </ul>
            
            <ol> Instructions:
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
                <li>And so on</li>
            </ol>

            <p style={{paddingLeft: "2.5%", paddingRight: "2.5%"}}>Can potentially include pictures of the recipe at major steps and a picture of the final product as well!</p>
            <p style={{textIndent: "2.5%"}}>Potentially adding videos also?</p>
            
        </div>
    )
}
export default Recipe;