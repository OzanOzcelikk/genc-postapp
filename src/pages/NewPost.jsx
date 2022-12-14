import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../contexts/BlogContext";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { Box, Container } from "@mui/system";
import { Avatar, Button, CssBaseline, Grid,  TextField, Typography } from "@mui/material";


const NewPost = () => {
const classes = {
  paper: {
    marginTop: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: 13,
    height: 200,
    width: 200,
    backgroundColor: "white",
   
  },
  blogImg: {
    width: 200,
    
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}

  const { currentUser } = useAuth();
  const [newBlog, setNewBlog] = useState({
    author: currentUser.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: `${new Date().toLocaleTimeString()}  ${new Date().toLocaleDateString()}`,
    author_image: currentUser.photoURL,
  });
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const newBlogHandler = (e) => {
    e.preventDefault();
    try {
      addBlog(newBlog);
      // console.log(newBlog);
      navigate("/");
      toastSuccessNotify("Blog added successfully!");
    } catch (error) {
      console.log("Error", error);
    }
  };

  // console.log("currentBlogs", currentBlogs);

  return (
    <Box  >
      <Typography sx={{fontFamily: "Girassol",
    textAlign: "center",
    color: "black",}}  variant="h3" noWrap>
        ──── NewPost ────
      </Typography>
      
        <Grid
          container
          sx={{flexGrow: 1,margin:0,width:"100%" }}
          spacing={5}
          justifyContent="center"
        >
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={classes.paper}>
        <Avatar style={classes.avatar}>
          <img src={currentUser.photoURL} alt="" style={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" style={classes.title}>
          ── NewPost ──
        </Typography>
        <form style={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={newBlog.title}
                autoFocus
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="image"
                label="Image URL"
                type="text"
                id="image"
                value={newBlog.image}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, image: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                value={newBlog.content}
                fullWidth
                rows={15}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                // defaultValue="Default Value"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={classes.submit}
            onClick={
              newBlogHandler
            }
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>

        </Grid>
      
    </Box>
  );
};

export default NewPost;
