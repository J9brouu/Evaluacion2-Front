import React from 'react';
import { Box } from '@mui/material';

const Divider = () => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #878787',
        my: { xs: 2, sm: 3, md: 4 },
        width: '100vw',        // Ocupa todo el ancho de la ventana
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    />
  );
};

export default Divider;