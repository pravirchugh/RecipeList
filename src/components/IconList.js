import { Grid } from "@mui/material";
import React, {useState} from 'react';
import Icon from './Icon.js';
import './IconList.css';
const RecipeInfo = [
    {name: "Chicken Tikka", course: "main"},
    {name: "Fettuccine Alfredo", course: "main"},
    {name: "Quesadillas", course: "main"},
    {name: "Caesar Salad", course: "side"},
    {name: "Pound Cake", course:"dessert"},
    {name: "Flan", course: "dessert"},
];

function IconList(){
    return (
        <div className="wrapperList">
            <Grid container spacing={3}>

                {RecipeInfo.map((recipe) => (
                    <Grid item xs={4}>
                        <div className='recipe'> {/* Make each div have a useState? So that the text goes down a bit and the dish's info is displayed? */}
                            
                            <Icon recipe_name={recipe.name} recipe_course={recipe.course}></Icon>
                        </div>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default IconList;