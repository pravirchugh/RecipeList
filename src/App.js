import './App.css';
import IconList from './components/IconList.js'
import { Grid } from "@mui/material";

const RecipeInfo = [
  {name: "Chicken Tikka", course: "main"},
  {name: "Fettuccine Alfredo", course: "main"},
  {name: "Quesadillas", course: "main"},
  {name: "Caesar Salad", course: "side"},
  {name: "Pound Cake", course:"dessert"},
  {name: "Flan", course: "dessert"},
];

function search(){
  let text = document.getElementById("searchBar").value;
  let found = false;
  for(let i = 0; i < RecipeInfo.length; i++){
    if(text == RecipeInfo[i].name){
      alert("We have this recipe! 😊");
      found = true;
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
          Search: <input type="text" className='sub1' id='searchBar'></input>
          <button className="searchBtn" onClick={() => search()}>Enter</button>
        </div>

        <br></br>
        <h1 className='sub1' style={{textAlign: "center"}}><b><u>Recipes</u></b> 📖</h1>
        <h3 style={{marginLeft: "1.5%"}}>Welcome to my Recipe site! Here, I have organized and listed some of my favorite recipes! I hope you enjoy! 😋</h3>
      </div>
      

      <IconList></IconList>
    </>
  );
}

export default App;
