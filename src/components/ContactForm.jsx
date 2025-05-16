import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (data) => {
    const newErrors = {};

    if (!data.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido.';
    } else if (/\d/.test(data.nombre)) {
      newErrors.nombre = 'El nombre no debe contener números.';
    }

    if (!data.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }

    if (data.telefono.trim() && !/^\d+$/.test(data.telefono)) {
      newErrors.telefono = 'El teléfono debe contener solo números.';
    }

    if (!data.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes enviar el formulario a tu servidor o API
      setEnviado(true);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    } else {
      setEnviado(false);
    }
  };

  return (
    <Box
      component="form"
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
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
      >
        Contacto Municipalidad de Cholchol
      </Typography>

      {enviado && (
        <Typography color="success.main" variant="body2" mb={2}>
          ¡Mensaje enviado con éxito!
        </Typography>
      )}

      <TextField
        fullWidth
        label="Nombre"
        name="nombre"
        variant="outlined"
        value={formData.nombre}
        onChange={handleChange}
        error={!!errors.nombre}
        helperText={errors.nombre}
        required
        size="small"
      />
      <TextField
        fullWidth
        label="Correo Electrónico"
        name="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        required
        size="small"
      />
      <TextField
        fullWidth
        label="Teléfono"
        name="telefono"
        variant="outlined"
        value={formData.telefono}
        onChange={handleChange}
        error={!!errors.telefono}
        helperText={errors.telefono}
        size="small"
      />
      <TextField
        fullWidth
        label="Mensaje"
        name="mensaje"
        variant="outlined"
        multiline
        rows={4}
        value={formData.mensaje}
        onChange={handleChange}
        error={!!errors.mensaje}
        helperText={errors.mensaje}
        required
        size="small"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}
      >
        Enviar Mensaje
      </Button>
    </Box>
  );
};

export default ContactForm;
