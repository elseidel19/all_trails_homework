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
import {allTrailsLat, allTrailsLng, getPlaceDetails} from './Utils';
import Pin from './Pin';
import GoogleMapReact from 'google-map-react';
import Grid from '@mui/material/Grid';


export default function ResultsCard(props) { 
  const mapProps = {
    center: {
      lat: allTrailsLat,
      lng: allTrailsLng,
    },
    zoom: 15
  };

  console.log(props.restaurants);

  if (props.restaurants.length < 1) {
    return null;
  }

  return (
     <Card>
      <CardContent>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <List>
              {
                props.restaurants.map((restaurant) => {
                  return <RestaurantCard name={restaurant.name} rating={restaurant.rating} numRaters = {restaurant.userRatingsTotal} url = {restaurant.mapsUrl} photoUrl = {restaurant.photoUrl}/>;
                })
              }
              </List>
            </Grid>
            <Grid item xs={8}>
              <GoogleMapReact 
                bootstrapURLKeys={{ key: "AIzaSyDue_S6t9ybh_NqaeOJDkr1KC9a2ycUYuE" }}
                defaultCenter={mapProps.center}
                defaultZoom={mapProps.zoom}
                options={{ gestureHandling: 'none', disableDefaultUI: true, keyboardShortcuts: false}}
              >
                              {
                props.restaurants.map((restaurant) => (
                  <Pin lat={restaurant.lat} lng={restaurant.lng}/>
                ))
              }
              </GoogleMapReact>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}