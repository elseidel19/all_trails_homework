import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

export default function RestaurantCard(props) { 

const picStyle = {
  height: "15vh",
  padding: "8px",
  textAlign:"center",
}

const textStyle = {
  display:"flex",
  height: "10vh",
  padding: "8px",
  textAlign:"left",
  flexDirection: "column",
  flex: "1"
}

const img = {
  maxWidth: "100%",
}

const divStyle = {  
  display:"flex",
  flexDirection: "row",
  flex: "1"
}

  return (
    <div>
    <ListItem alignItems="flex-start">
      <Card>
        <CardActionArea href={props.url}>
          <CardContent>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={4} style={picStyle}>
                  <img src={props.photoUrl} style={img}/>
                </Grid>
                <Grid item xs={8} style={textStyle}>
                  {props.name}
                  <div style={divStyle}>
                    <Rating name="read-only" value={props.rating} readOnly/>
                    ({props.numRaters})
                  </div>
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