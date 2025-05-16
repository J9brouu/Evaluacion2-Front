import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
  // Scroll suave al hacer clic
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const becasSection = document.getElementById('becas');
    if (becasSection) {
      becasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        height: { xs: '40vh', sm: '50vh', md: '60vh' },
        minHeight: { xs: 220, sm: 300, md: 400 },
        position: 'relative',
        backgroundImage: 'url(/src/assets/banner.png)', // Reemplaza con la ruta correcta de tu imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Capa de transparencia */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Aumenta la opacidad para oscurecer más
          zIndex: 1,
        }}
      />
      {/* Contenido */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          px: { xs: 1, sm: 2, md: 4 },
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: { xs: 1, sm: 2 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            lineHeight: 1.1,
          }}
        >
          Municipalidad de Cholchol
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: { xs: 2, sm: 4 },
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          }}
        >
          Tu portal de servicios y trámites en línea
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            px: { xs: 2, sm: 4 },
            py: { xs: 1, sm: 1.5 },
          }}
          onClick={handleSmoothScroll}
        >
          Conoce más
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
