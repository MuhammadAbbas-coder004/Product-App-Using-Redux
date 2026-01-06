import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/product' },
  { name: 'Contact', path: '/contect' }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
 
  const cart = useSelector(state => state.cart.cart);
 
  const cartItemsCount = cart.length;

  const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
  const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null); };
  const handleCloseUserMenu = () => { setAnchorElUser(null); };

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Desktop Logo */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img 
                src="https://mui.com/static/logo.png" 
                alt="MUI Logo" 
                style={{ height: 35, marginRight: 8, filter: 'brightness(0) invert(1)', cursor: 'pointer' }}
              />
              <Typography variant="h6" noWrap sx={{ fontWeight: 700, color: 'white' }}>
                MUI Store
              </Typography>
            </Link>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="menu" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo (Center) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" noWrap sx={{ fontWeight: 700, color: 'white' }}>
                MUI Store
              </Typography>
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link key={page.name} to={page.path} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ 
                    my: 2, 
                    color: 'white', 
                    mx: 1, 
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      transform: 'translateY(-2px)', 
                      transition: 'all 0.3s ease' 
                    } 
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Cart + Avatar */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Cart Icon with Dynamic Count */}
            <Tooltip title="Shopping Cart">
              <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
                <IconButton sx={{ color: 'white' }}>
                  <Badge badgeContent={cartItemsCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Link>
            </Tooltip>

            {/* User Avatar */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                  alt="User" 
                  src="https://i.pinimg.com/736x/36/b1/3f/36b13f53eb9c2990b5ee3402fe97094e.jpg" 
                  sx={{ 
                    border: '2px solid white', 
                    '&:hover': { transform: 'scale(1.1)', transition: '0.3s' } 
                  }} 
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;