import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useThemeContext } from '../hooks/useTheme';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Weekly Menu', path: '/menu' },
    { label: 'Attendance', path: '/attendance' },
    { label: 'Feedback', path: '/feedback' },
    { label: 'Notices', path: '/notices' },
    { label: 'Profile', path: '/profile' },
  ];

  return (
    <AppBar position="sticky" sx={{ mb: 4 }}>
      <Toolbar className="d-flex justify-content-between align-items-center">
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
            mr: 4,
          }}
        >
          🍽️ Hostel Meals
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, flex: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              sx={{ textTransform: 'none', fontSize: '1rem' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={handleMenuClick}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMenuClose}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>

        {/* Theme Toggle */}
        <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
