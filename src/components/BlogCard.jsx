import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../contexts/AuthContextProvider';
import { useBlog } from '../contexts/BlogContext';
import { toastWarnNotify } from '../helpers/ToastNotify';
import EditIcon from '@mui/icons-material/Edit';
import DetailsIcon from '@mui/icons-material/Details';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(values) {
  const navigate = useNavigate();
  const {currentUser} = useAuth();
  const {deleteOneBlog} = useBlog();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setliked]= React.useState(false);

  
const {id,author,content,get_comment_count,get_like_count,image,published_date,title,author_image}=values.values;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin:"10px"}}>
      <CardHeader
        avatar={
          <Avatar src={author_image} sx={{ bgcolor: red[500] }} aria-label="recipe">
            :
          </Avatar>
        }
        action={<>
        <IconButton onClick={()=>{
          if (author===currentUser.email) {
            navigate(`/update-blog/${id}`)
          }
          else{
            toastWarnNotify("You can only update your own posts.")
          }
          
          }} aria-label="settings">
            <EditIcon />
            
          </IconButton>
          <IconButton onClick={()=>{
            if(author===currentUser.email){
              console.log("sa")
              deleteOneBlog(id);
            }else{
              toastWarnNotify("You can only delete your own posts.");
              navigate("/");
            }
          }}><DeleteIcon/></IconButton>
          </>
          
        }
        title={title}
        subheader={author}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={()=>setliked(!liked)} aria-label="add to favorites">
          {liked? <FavoriteIcon sx={{color:"red"}}/>:<FavoriteIcon />}
        </IconButton>
        <IconButton onClick={()=>
          
            navigate(`/detail/${id}`)}
           aria-label="share">
          <DetailsIcon/>
        </IconButton>
        <Typography variant='subtitle2'>Date: {published_date}</Typography>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
     
    </Card>
  );
}