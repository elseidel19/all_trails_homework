import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import RestaurantCard from './RestaurantCard';
import ResultsCard from './ResultsCard';
import {allTrailsLat, allTrailsLng, getPlaceDetails} from './Utils';
import Pin from './Pin';
import GoogleMapReact from 'google-map-react';
import Grid from '@mui/material/Grid';

export default function App() {
  const mapStyle = {
    height: "100vh",
  }

  const [input, setInput] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {});


  const getNearbyOptions = async () => {
    console.log(input);
    let url;
    if (!input) {
      url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.791210 %2C-122.400150&language=en&radius=500&type=restaurant&key=AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE";
    }
    else {
      url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.791210 %2C-122.400150&language=en&radius=500&type=restaurant&key=AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE&keyword=" + input;
    }
    const response= await fetch(url);
    const json = await response.json();
    const results = json.results ?? [];


    const specifics = results.map(async (restaurant) => {
      return await getPlaceDetails(restaurant);
    });

    const values = await Promise.all(specifics);
    console.log(values);
    setRestaurants(values);
  }


  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6">
            All Trails at Lunch
          </Typography>
          <input value={input} onInput={e => setInput(e.target.value)}/>
            <button onClick={() => getNearbyOptions()}>
              Search
            </button>
        </Toolbar>
      </AppBar>
      <ResultsCard restaurants={restaurants ?? []}/>
    </div>
  );
}
