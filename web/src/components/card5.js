import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import imag4 from '../image/imag5.jpeg';

export function MediaCard5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imag4}
        alt="green iguana" 
        />
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Mobile Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Jeffrey Dahmer
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained">Contact</Button>

      </CardActions>
    </Card>


  );
}
