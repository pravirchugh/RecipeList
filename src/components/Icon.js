import React, {useState} from 'react';
import { Grid } from "@mui/material";
import './Icon.css';

function Icon(props){
    return (
        <div className='wrapperIcon'>
            <h3><u>{props.recipe_name}</u></h3>
            <h4>{props.recipe_course}</h4>
        </div>
    )
   
}

export default Icon;