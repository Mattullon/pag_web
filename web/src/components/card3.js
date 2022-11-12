import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import imag3 from '../image/imag3.jpeg';

export function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imag3}
        alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Mobile Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained">Contact</Button>

      </CardActions>
    </Card>


  );
}
