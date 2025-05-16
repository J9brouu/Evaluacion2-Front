import { Box, Typography } from "@mui/material";

// Footer component
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#012d3e', color: '#fff', py: 2, textAlign: 'center' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 4 },
                    width: '100%',
                    px: { xs: 1, sm: 2 }
                }}
            >
                {/* Correo */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0, flex: 1 }}>
                    <img src="src/assets/correo.png" alt="Correo" style={{ width: 40, height: 40, marginBottom: 8, maxWidth: '100%' }} />
                    <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-all' }}>
                        OFICINADEPARTES@MUNICHOLCHOL.CL
                    </Typography>
                </Box>
                {/* Dirección */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0, flex: 1 }}>
                    <img src="src/assets/direccion.png" alt="Dirección" style={{ width: 40, height: 40, marginBottom: 8, maxWidth: '100%' }} />
                    <Typography variant="body2" color="inherit" sx={{ wordBreak: 'break-word' }}>
                        JOSÉ JOAQUÍN PÉREZ 449, CHOLCHOL
                    </Typography>
                </Box>
                {/* Teléfono */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0, flex: 1 }}>
                    <img src="src/assets/telefono.png" alt="Teléfono" style={{ width: 40, height: 40, marginBottom: 8, maxWidth: '100%' }} />
                    <Typography variant="body2" color="inherit">
                        452 734200
                    </Typography>
                </Box>
            </Box>
            {/* Mapa de Google Maps */}
            <Box sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}>
                <Box sx={{ width: { xs: '98vw', sm: 400, md: 500 }, maxWidth: '100%', mx: 'auto' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.01621247085!2d-72.85151108788351!3d-38.60249707167084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966ad17526877055%3A0x8b034f21a6703ff3!2sJose%20Joaquin%20Perez%20449%2C%20Cholchol%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1747327595266!5m2!1ses-419!2scl"
                        width="100%"
                        height="220"
                        style={{ border: 0, borderRadius: 8, maxWidth: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa Municipalidad de Cholchol"
                    ></iframe>
                </Box>
            </Box>
            <Typography sx={{ mt: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }} variant="body1" color="inherit">
                © 2025 Municipalidad de Cholchol. Todos los derechos reservados.
            </Typography>
        </Box>
    );
}

export default Footer;