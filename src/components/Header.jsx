import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';

/**
 * Componente Header: Representa el encabezado de la aplicación
 */
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Alternar Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#012d3e' }}>
        <Toolbar sx={{ px: { xs: 1, sm: 3 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            {/* Logo */}
            <Avatar
              alt="Logo"
              src="src/assets/logo.png"
              sx={{ marginRight: 1, width: { xs: 36, sm: 48 }, height: { xs: 36, sm: 48 } }}
            />
            {/* Título */}
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                fontWeight: 'bold',
                letterSpacing: 1,
              }}
            >
              Municipalidad de Cholchol
            </Typography>
          </Box>
          {/* Enlaces de navegación (ocultos en xs) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Link href="#" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Home
            </Link>
            <Link href="#contacto" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Municipio
            </Link>
            <Link href="#opcion3" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Unidades Municipales
            </Link>
            <Link href="#opcion3" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Contactos
            </Link>
            <Link href="https://municholchol.cl:2096/webmaillogout.cgi" color="inherit" underline="none" sx={{ marginRight: 2, fontSize: { sm: '1rem', md: '1.1rem' } }}>
              Webmail
            </Link>
          </Box>
          {/* Botón menú hamburguesa en móvil */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer para navegación móvil */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: '100vw', maxWidth: 420, mx: 'auto' }}>
          <ListItem button component="a" href="#servicios" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="#contacto" onClick={toggleDrawer(false)}>
            <ListItemText primary="Municipio" />
          </ListItem>
          <ListItem button component="a" href="#opcion3" onClick={toggleDrawer(false)}>
            <ListItemText primary="Unidades Municipales" />
          </ListItem>
          <ListItem button component="a" href="#opcion3" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contactos" />
          </ListItem>
          <ListItem button component="a" href="https://municholchol.cl:2096/webmaillogout.cgi" onClick={toggleDrawer(false)}>
            <ListItemText primary="Webmail" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
