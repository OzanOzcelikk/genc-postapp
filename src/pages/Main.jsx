import React from "react";



import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import RecipeReviewCard from "../components/BlogCard";
import { useBlog } from "../contexts/BlogContext";

const Main = () => {
  
  const { currentBlogs } = useBlog();
  console.log(currentBlogs)
  // const currentBlogs = ""

  return (
    <Box  >
      <Typography sx={{fontFamily: "Girassol",
    textAlign: "center",
    color: "red",}}  variant="h3" noWrap>
        ──── BLOGS ────
      </Typography>
      
        <Grid
          container
          sx={{flexGrow: 1,margin:0,width:"100%" }}
          spacing={5}
          justifyContent="center"
        >
          {currentBlogs === undefined ? (
            <img src={{}} alt="loading" />
          ) :( currentBlogs.length!==0 ? (
            
            currentBlogs?.map((item, id) => (
              <Grid key={id} >
                <RecipeReviewCard values={item}/>
              </Grid>
            ))
            
          ) : (
            
            <h2>Gösterilecek veri yok.</h2>
          ))}

        </Grid>
      
    </Box>
  );
};

export default Main;
