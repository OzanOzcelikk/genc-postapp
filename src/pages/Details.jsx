import React from 'react'
import RecipeReviewCard from '../components/BlogCard'
import { useParams } from 'react-router-dom';
import { useBlog} from "../contexts/BlogContext"
import { Grid } from '@mui/material';

const Details = () => {
  let { id } = useParams();
  const{ getOneBlog}=useBlog();
  console.log(id)
  const item= getOneBlog(id)? getOneBlog(id)[0] : "";
  console.log(item);
  return (
    <Grid
          container
          sx={{flexGrow: 1,margin:0,width:"100%" }}
          spacing={5}
          justifyContent="center"
        ><RecipeReviewCard values={item}/></Grid>
     
  )
}

export default Details