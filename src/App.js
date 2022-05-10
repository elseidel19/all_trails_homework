import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ResultsCard from './ResultsCard';
import {getPlaceDetails, allTrailsLogo} from './Utils';

export default function App() {

  const logoStyle = {
    marginRight: "8px",
    maxWidth: "3%",
  }

  const appBarStyle = {
    marginLeft:"8vw", 
    marginRight:"8vw",
  }

  const [input, setInput] = useState('');
  const [restaurants, setRestaurants] = useState([]);


  const getNearbyOptions = async () => {
    if (input) {
      const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.791210 %2C-122.400150&language=en&radius=500&type=restaurant&key=AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE&keyword=" + input;
      const response= await fetch(url);
      const json = await response.json();
      const results = json.results ?? [];

      const specifics = results.map(async (restaurant) => {
        return await getPlaceDetails(restaurant);
      });

      const values = await Promise.all(specifics);
      setRestaurants(values);
    }
  }

  return (
    <Box style={appBarStyle}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <img src={allTrailsLogo} style={logoStyle}/>
          <Typography variant="h4" style={{marginRight: "8px", fontWeight: "bold"}}>
            AllTrails
          </Typography>
          <Typography variant="h4" style={{marginRight: "24px"}}>
            at Lunch
          </Typography>
          <input value={input} onInput={e => setInput(e.target.value)}/>
          <button onClick={() => getNearbyOptions()}>
            Search
          </button>
        </Toolbar>
      </AppBar>
      <ResultsCard restaurants={restaurants ?? []}/>
      </Box>
  );
}
