import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useAuth } from '../contexts/AuthContextProvider';

export default function Profile() {
  const {currentUser} = useAuth(); 
  return (
 <Box  >
      <Typography sx={{fontFamily: "Girassol",
    textAlign: "center",
    color: "black",}}  variant="h3" noWrap>
        ──── PROFILE ────
      </Typography>
      
        <Grid
          container
          sx={{flexGrow: 1,margin:0,width:"100%" }}
          spacing={5}
          justifyContent="center"
        >
          <Card sx={{ width: 300}}>
      <CardActionArea sx={{}}>
        <CardMedia
          component="img"
          height="140"
          image={currentUser.photoURL}
          alt={`Profile picture ${currentUser.displayName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {currentUser.displayName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {currentUser.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </Grid>
      
    </Box>


    
  );
}