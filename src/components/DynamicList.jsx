import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Box
      mt={4}
      sx={{
        width: { xs: '98vw', sm: 400 },
        maxWidth: 500,
        mx: 'auto',
        mt: 4,
        p: { xs: 1, sm: 2 },
        borderRadius: 1,
        boxShadow: 3,
        '& .MuiTextField-root': { mb: 2 },
        background: '#fff',
      }}
    >
      <Typography variant="h6" gutterBottom fontSize={{ xs: '1rem', sm: '1.1rem' }}>
        Lista Dinámica
      </Typography>
      <TextField
        label="Agregar elemento"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{ mb: 2, fontSize: { xs: '0.85rem', sm: '0.9rem' }, py: 1 }}
        fullWidth
      >
        Agregar
      </Button>
      <List dense>
        {items.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)} size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            }
          >
            <ListItemText primary={item} primaryTypographyProps={{ fontSize: { xs: '0.9rem', sm: '0.95rem' } }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DynamicList;