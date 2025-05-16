import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Flechas personalizadas
const PrevArrow = ({ onClick }) => (
    <div
        style={{
            position: "absolute",
            left: "-35px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            cursor: "pointer",
        }}
        onClick={onClick}
    >
        <img src="src/assets/atras.png" alt="Prev" style={{ width: "40px" }} />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        style={{
            position: "absolute",
            right: "-35px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            cursor: "pointer",
        }}
        onClick={onClick}
    >
        <img src="src/assets/proximo.png" alt="Next" style={{ width: "40px" }} />
    </div>
);

const Becas = () => {
    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <Box id="becas" sx={{ px: { xs: 1, sm: 2, md: 4 }, py: { xs: 2, sm: 3 } }}>
            {/* Contenido principal */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.1rem' } }} gutterBottom>
                Apoyo Municipal
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' } }} paragraph>
                100 jóvenes de Cholchol son Beneficiados con Becas de Educación Superior
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }} paragraph>
                El Municipio de Cholchol, liderado por el alcalde Álvaro Labraña junto al Concejo municipal, a través de su Programa de Becas Municipales, benefició este año 2025 a 100 estudiantes de educación superior, reafirmando su compromiso con el acceso equitativo a la educación y el apoyo al desarrollo académico de jóvenes de la comuna. Esta iniciativa busca aliviar la carga económica de las familias y fomentar la continuidad de estudios en instituciones técnico-profesionales y universitarias.
            </Typography>

            {/* Carrusel */}
            <Box sx={{
                mt: 4,
                maxWidth: { xs: '98vw', sm: '90vw', md: '800px' },
                margin: '0 auto',
                position: 'relative'
            }}>
                <Slider {...settings}>
                    <Box>
                        <img
                            src="src/assets/resultadobeca.png"
                            alt="resultado beca"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '350px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                transition: 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
                            }}
                        />
                    </Box>
                    <Box>
                        <img
                            src="src/assets/1.png"
                            alt="resultado 1"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                transition: 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
                            }}
                        />
                    </Box>
                    <Box>
                        <img
                            src="src/assets/2.png"
                            alt="resultado 2"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                transition: 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
                            }}
                        />
                    </Box>
                    <Box>
                        <img
                            src="src/assets/3.png"
                            alt="resultado 3"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                transition: 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
                            }}
                        />
                    </Box>
                    <Box>
                        <img
                            src="src/assets/4.png"
                            alt="resultado 4"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                transition: 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
                            }}
                        />
                    </Box>
                    <Box>
                        <img
                            src="src/assets/5.png"
                            alt="resultado 5"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '350px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                transition: 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)'
                            }}
                        />
                    </Box>
                </Slider>
            </Box>
        </Box>
    );
};

export default Becas;