import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextProvider';
import { logOut } from '../helpers/firebase';



function ResponsiveAppBar() {
  const {currentUser} = useAuth(); 
  
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    
  };

  return (
    <AppBar sx={{backgroundColor:"black"}} position="static">
      <Container  maxWidth="xl">
        <Toolbar disableGutters>
            <InstagramIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
        
          <Typography
            variant="h6"
            noWrap
            component="button"
            onClick={()=>{navigate("/")}}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           GENC-BLOGAPP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
          </Box>
          
          <InstagramIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
          <Typography
            variant="h5"
            noWrap
            component="button"
            onClick={()=>{navigate("/")}}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GENC-BLOGAPP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>
          <Typography variant="h6"
            noWrap
            component="button"
            onClick={()=>{navigate("/profile")}}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textTransform:"capitalize",
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              
              textDecoration: 'none',
            }}>{currentUser?.displayName}</Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                
                {currentUser? <Avatar alt={currentUser.displayName} src={currentUser.photoURL} />:<Avatar alt="Guest" src="/static/images/avatar/2.jpg" />}
                

              </IconButton>
            </Tooltip>
            {currentUser? 
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ><MenuItem  onClick={()=>{
              navigate("/")
              handleCloseUserMenu()}}>
                <Typography textAlign="center" >Home</Typography>
              </MenuItem>  
             <MenuItem  onClick={()=>{
              navigate("/new-post")
              handleCloseUserMenu()}}>
                <Typography textAlign="center" >NewPost</Typography>
              </MenuItem>
              <MenuItem  onClick={()=>{
                navigate("/profile")
                handleCloseUserMenu()}}>
                  <Typography textAlign="center" >Profile</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>{
          logOut();
          navigate("/login")
          handleCloseUserMenu()}}>
            <Typography textAlign="center" >Logout</Typography>
          </MenuItem>

            </Menu>
            : <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >   
          <MenuItem  onClick={()=>{
            navigate("/")
            handleCloseUserMenu()}}>
              <Typography textAlign="center" >Home</Typography>
            </MenuItem>
          <MenuItem  onClick={()=>{
            navigate("/login")
            handleCloseUserMenu()}}>
              <Typography textAlign="center" >Login</Typography>
            </MenuItem>
            <MenuItem  onClick={()=>{
            navigate("/register")
            handleCloseUserMenu()}}>
              <Typography textAlign="center" >Register</Typography>
            </MenuItem>

          </Menu>}
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;