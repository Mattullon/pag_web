import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import imag from '../image/imag.jpeg'

export function MediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imag}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Full-stack Engineer
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

