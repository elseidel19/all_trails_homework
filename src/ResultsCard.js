import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import RestaurantCard from './RestaurantCard';
import {allTrailsLat, allTrailsLng, apiKey} from './Utils';
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
                  return (
                    <RestaurantCard 
                      name={restaurant.name} 
                      rating={restaurant.rating} 
                      numRaters = {restaurant.userRatingsTotal} 
                      url = {restaurant.mapsUrl} 
                      photoUrl = {restaurant.photoUrl}
                      phoneNum = {restaurant.phoneNumber}
                      address = {restaurant.address}
                    />
                  );
                })
              }
              </List>
            </Grid>
            <Grid item xs={8}>
              <GoogleMapReact 
                bootstrapURLKeys={{ key: apiKey}}
                defaultCenter={mapProps.center}
                defaultZoom={mapProps.zoom}
                options={{ 
                  gestureHandling: 'none', 
                  disableDefaultUI: true, 
                  keyboardShortcuts: false
                }}
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