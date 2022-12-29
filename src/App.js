import './App.css';
import IconList from './components/IconList.js'
import { Grid } from "@mui/material";

const RecipeInfo = [
  {name: "Chicken Tikka", course: "main"},
  {name: "Fettuccine Alfredo", course: "main"},
  {name: "Grilled Salmon", course: "main"},
  {name: "Quesadillas", course: "main"},
  {name: "Vegetable Sushi", course: "main"},
  {name: "BBQ Chicken Pizza", course: "main"},
  {name: "Caesar Salad", course: "side"},
  {name: "Chips and Homemade Salsa", course: "side"},
  {name: "French Fries", course: "side"},
  {name: "Pound Cake", course:"dessert"},
  {name: "Flan", course: "dessert"},
  {name: "Gulab Jamun", course: "dessert"},
];

/*

Have three buttons so that customers can immediately choose which course of meal they are looking for! Allows me to include multiple different types of foods and recipes on one site
without too much confusion!

*/

let startDisplayIdx = 0;
let endDisplayIdx = 12;

function search(){
  let text = document.getElementById("searchBar").value;
  let found = false;
  for(let i = 0; i < RecipeInfo.length; i++){
    if(text.toLowerCase() == RecipeInfo[i].name.toLowerCase()){ /* If we have the exact recipe */
      alert("We have this recipe! 😊");
      found = true;
      break;
    } 
  }

  if(!found){
    for(let i = 0; i < RecipeInfo.length; i++){
      
      let words = RecipeInfo[i].name.split(" ");
      
      
      for(let j = 0; j < words.length; j++){
        if(words[j].toLowerCase() == text.toLowerCase()){ /* If a keyword is present: an example of this is if the user searches for "Fettuccine", we might have the recipe */
          alert("We might have this recipe! 🤔");
          found = true;
          break;
        }
      }
      if(found){
        break;
      }
      
    }
  }

  if(!found){
    alert("Sorry, we don't have that recipe at the moment!");
  }
 
}

function App() {
  return (
    <>
      <div id="introduction">
        <br></br>
      
        
        <div style={{float: 'right', marginRight: '1.5%'}}>
          Search: <input type="text" className='sub1' id='searchBar' placeholder='Query...'></input>
          <button className="searchBtn" onClick={() => search()}>Enter</button>
        </div>

        <br></br>
        <h1 className='sub1' style={{textAlign: "center"}}><b><u>Recipes</u></b> 📖</h1>
        <h3 style={{marginLeft: "1.5%"}}>Welcome to my Recipe site! Here, I have organized and listed some of my favorite recipes! I hope you enjoy! 😋</h3>
        <h4>To revert back to the original screen, click any recipe.</h4>
      </div>

      <IconList></IconList>
      
      <br></br>
      <br></br>
      
    </>
  );
}



export default App;
