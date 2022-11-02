import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EventCard(props) {
  return (
      <Card style={{margin:"4rem 0rem 4rem 4rem"}} sx={{ width: 345 }}>
      <CardActionArea>
              <CardMedia
                  style={{height:"8rem"}}
          component="img"
          height="70"
          image={require("../assets/images/crystal.jpeg")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
      
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
