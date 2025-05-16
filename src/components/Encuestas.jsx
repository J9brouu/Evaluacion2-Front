import { Box, Typography } from "@mui/material";

const Noticias = () => {
    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    letterSpacing: 2,
                    mb: 2,
                    color: '#012d3e'
                }}
            >
                ENCUESTAS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: { xs: 1, sm: 2 }, py: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 2, sm: 3, md: 4 },
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: { xs: '100%', sm: '820px' },
                        mx: 'auto'
                    }}
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'block', width: '100%', maxWidth: 400 }}
                    >
                        <img
                            src="src/assets/ESCUESTA-DEPORTE.png"
                            alt="Encuesta Deporte"
                            style={{
                                width: '100%',
                                maxWidth: 400,
                                minWidth: 0,
                                height: 'auto',
                                aspectRatio: '1/1',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                display: 'block'
                            }}
                        />
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'block', width: '100%', maxWidth: 400 }}
                    >
                        <img
                            src="src/assets/ESCUESTASCLIMA.png"
                            alt="Encuesta Clima"
                            style={{
                                width: '100%',
                                maxWidth: 400,
                                minWidth: 0,
                                height: 'auto',
                                aspectRatio: '1/1',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                display: 'block'
                            }}
                        />
                    </a>
                </Box>
            </Box>
        </>
    );
}
export default Noticias;