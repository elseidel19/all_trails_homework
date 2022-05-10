import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import {cardColor} from './Utils';

export default function RestaurantCard(props) { 

  const picContainerStyle = {
    height: "15vh",
    padding: "8px",
    textAlign:"center",
  }

  const textStyle = {
    display:"flex",
    flex: "1",
    flexDirection: "column",
    height: "10vh",
    padding: "8px",
    textAlign:"left",
  }

  const picStyle = {
    maxWidth: "100%",
  }

  const inlineStyle = {  
    display:"flex",
    flex: "1",
    flexDirection: "row",
    margin: "4px",
  }

  const ratingComponent = (
    <div style={inlineStyle}>
      <Rating name="read-only" value={props.rating} readOnly/>
      ({props.numRaters})
    </div>
  );

  const phoneNumComponent = (
    <div style={inlineStyle}>
      <div style={{marginRight: "8px", fontSize: "10px", fontWeight: "bold"}}>
        Phone Number:
      </div>
      <div style={{marginRight: "8px", fontSize: "10px"}}>
        {props.phoneNum}
      </div>
    </div> 
  );

  const addressComponent = (
    <div style={inlineStyle}>
      <div style={{marginRight: "8px", fontSize: "10px", fontWeight: "bold"}}>
        Address:
      </div>
      <div style={{marginRight: "8px", fontSize: "10px"}}>
        {props.address}
      </div>
    </div> 
  );

  return (
    <div>
    <ListItem alignItems="flex-start">
      <Card>
        <CardActionArea href={props.url}>
          <CardContent style={{backgroundColor: cardColor}}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={4} style={picContainerStyle}>
                  <img src={props.photoUrl} style={picStyle}/>
                </Grid>
                <Grid item xs={8} style={textStyle}>
                  {props.name}
                  {ratingComponent}
                  {phoneNumComponent}
                  {addressComponent}
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItem>
      </div>
    );
}