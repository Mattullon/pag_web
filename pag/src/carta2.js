import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import imag2 from './componentes/imag2.jpeg'
export function MediaCard2() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imag2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Junior Developer
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

