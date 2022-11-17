import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function MyGamesCard() {
    return (
        <Card style={{margin:"4rem 0rem 4rem 4rem"}} sx={{ width: 150 }}>
        <CardActionArea>
                <CardMedia
                    style={{height:"9rem"}}
            component="img"
            height="20"
            image={require("../../assets/images/crystal.jpeg")}
            alt="green iguana"
          />
          <CardContent>
            <Typography  style={{height:"1rem"}} gutterBottom variant="p" component="p">
              Game Title
            </Typography>
        
          </CardContent>
        </CardActionArea>
      </Card>
    );
}