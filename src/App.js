
import React,{Fragment, useEffect, useState} from "react";
import './App.css';
import { Button, Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import {getMatches} from "./api/Api";
import MyCard from './components/MyCard';

function App() {

  const [matches,setMatches]=useState([]);


  useEffect(()=>{
    {getMatches().then((data)=> {setMatches(data.matches);console.log(data.matches);}).catch((error)=>alert("could not load data"));}
  },[]);
  

  return (
    <div className="App">
       <Navbar/>
      <h1>Live score</h1>
  <Grid container>
<Grid sm="2">

</Grid>
<Grid sm="8">
{
    matches.map((match)=>(
      <Fragment key={match.unique_id}>
        {match.type==="ODI"?(
          <MyCard key={match.unique_id} match={match}/>
        ):("")}
      </Fragment>
    ))
  }  
</Grid>
  </Grid>
    </div>
  );
}

export default App;
