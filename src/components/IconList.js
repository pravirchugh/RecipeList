import { Grid } from "@mui/material";
import React, {useState} from 'react';
import Icon from './Icon.js';
import Recipe from './Recipe.js';
import './IconList.css';

let expanded = false;

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
    {name: "Gulab Jamun", course: "dessert", index: 11},
];
let nDisplayAtStart = 12;
function IconList(){

    const [expanded, setExpanded] = useState(-1);

   

    function handleClick(boxIndex){

        if(expanded != -1){
            setExpanded(-1); // minimizes the expanded content
            nDisplayAtStart = 12;
        } else {
            setExpanded(boxIndex);
            // nDisplayAtStart should be set to the next highest multiple of 3.
            nDisplayAtStart = boxIndex;
            if(nDisplayAtStart % 3 == 1){
                nDisplayAtStart += 2;
            } else if(nDisplayAtStart % 3 == 2){
                nDisplayAtStart++;
            } else {
                nDisplayAtStart += 3; // to include the current row as well!
            }
            
            
        }
        
    }

    return (
        <>
     
            <div className="wrapperList">
                <Grid container spacing={3}>
                    
                    {RecipeInfo.slice(0, nDisplayAtStart).map((recipe) => (
                        <>
                            <Grid item xs={4}>  
                                <div className='recipe' onClick={() => handleClick(recipe.index)}> {/* Make each div have a useState? So that the text goes down a bit and the dish's info is displayed? */}
                                    
                                    <Icon recipe_name={recipe.name} recipe_course={recipe.course}></Icon>
                                    
                                    {/* {(expanded != -1) && (expanded == recipe.index) &&
                                    
                                        <p>Test expanded this. {recipe.index}</p>     
                                    } */}
                                </div>
                                
                                

                            </Grid>
                            
                        </>
                    ))}

                    

                    


                    {/* {expanded != -1 && RecipeInfo[expanded].name} */}
                    
                </Grid>

                <>
                    {expanded != -1 && 
                        <Recipe recipe_idx={expanded}></Recipe>
                    }
                </>

                <Grid container spacing={3}>
                    
                    {RecipeInfo.slice(nDisplayAtStart, 12).map((recipe) => (
                        <>
                            <Grid item xs={4}>  
                                <div className='recipe' onClick={() => handleClick(recipe.index)}> {/* Make each div have a useState? So that the text goes down a bit and the dish's info is displayed? */}
                                    
                                    <Icon recipe_name={recipe.name} recipe_course={recipe.course}></Icon>
                                    
                                    {/* {(expanded != -1) && (expanded == recipe.index) &&
                                    
                                        <p>Test expanded this. {recipe.index}</p>     
                                    } */}
                                </div>
                                
                                

                            </Grid>
                            <>
                                {expanded != -1 && (recipe.index-2) / 3 == (expanded - (expanded % 3)) / 3 && 
                                    
                                    RecipeInfo[expanded].name + " additional placeholder text to see how far the container can hold paragraph based text"
                                }
                            </>
                        </>
                    ))}


                    


                    {/* {expanded != -1 && RecipeInfo[expanded].name} */}
                    
                </Grid>
               
            </div>
        </>
    )
}

export default IconList;