import './App.css';
import IconList from './components/IconList.js'
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <div id="introduction">
        <br></br>

        <div style={{float: 'right', marginRight: '1.5%'}}>
          Search: <input type="text" className='sub1' id='searchBar'></input>
          <button className="searchBtn">Enter</button>
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
