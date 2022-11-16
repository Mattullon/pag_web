import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import imag2 from '../image/imag2.jpeg';

export function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imag2}
        alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Mobile Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Eugenio Gamarra
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained">Contact</Button>

      </CardActions>
    </Card>


  );
}
//flexbox 
//grip de mui 
//react router 