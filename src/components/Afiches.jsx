import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Modal } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const afiches = [
    { src: "src/assets/afiche1.png", alt: "Afiche 1" },
    { src: "src/assets/afiche2.png", alt: "Afiche 2" },
    {
        src: "src/assets/afiche3.png", alt: "Afiche 3", carousel: [
            "src/assets/afiche3.png",
            "src/assets/afiche3b.png",
            "src/assets/afiche3c.png"
        ]
    },
    { src: "src/assets/afiche4.png", alt: "Afiche 4", link: "https://portalweb.insico.cl/Cholchol/Permisos/" },
];

const Afiches = () => {
    const [zoom, setZoom] = useState(null);
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [carouselAnim, setCarouselAnim] = useState(""); // Para animación

    // Animación al cambiar de imagen
    const handlePrev = () => {
        setCarouselAnim("slide-right");
        setTimeout(() => {
            setCarouselIdx((prev) => prev === 0 ? afiches[2].carousel.length - 1 : prev - 1);
            setCarouselAnim("");
        }, 250);
    };

    const handleNext = () => {
        setCarouselAnim("slide-left");
        setTimeout(() => {
            setCarouselIdx((prev) => prev === afiches[2].carousel.length - 1 ? 0 : prev + 1);
            setCarouselAnim("");
        }, 250);
    };

    // Permitir flechas del teclado
    useEffect(() => {
        if (!carouselOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "Escape") setCarouselOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [carouselOpen]);

    const handleAficheClick = (idx) => {
        if (afiches[idx].carousel) {
            setCarouselOpen(true);
            setCarouselIdx(0);
        } else {
            setZoom(idx);
        }
    };

    const handleCarouselClose = () => {
        setCarouselOpen(false);
    };

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
                AFICHES
            </Typography>
            <Box
                sx={{
                    padding: { xs: 1, sm: 2 },
                    margin: '0 auto',
                    maxWidth: { xs: '100%', sm: '90%', md: '800px' },
                    backgroundColor: '#012d3e',
                    borderRadius: '10px',
                    color: '#fff',
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: 2, sm: 3, md: 4 },
                        flexWrap: "wrap",
                        justifyContent: "center",
                        width: "100%"
                    }}
                >
                    {afiches.map((afiche, idx) => (
                        <a
                            href={afiche.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={afiche.alt}
                            style={{ display: "inline-block" }}
                            onClick={e => {
                                if (afiche.carousel) {
                                    e.preventDefault();
                                    handleAficheClick(idx);
                                } else if (zoom !== idx) {
                                    e.preventDefault();
                                    setZoom(idx);
                                } else {
                                    setZoom(null);
                                }
                            }}
                        >
                            <img
                                src={afiche.src}
                                alt={afiche.alt}
                                style={{
                                    width: zoom === idx
                                        ? "min(90vw,420px)"
                                        : "min(45vw,180px)",
                                    height: zoom === idx
                                        ? "min(70vw,530px)"
                                        : "min(35vw,220px)",
                                    maxWidth: "100%",
                                    maxHeight: "80vw",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    boxShadow: zoom === idx
                                        ? "0 8px 32px rgba(0,0,0,0.4)"
                                        : "0 2px 8px rgba(0,0,0,0.15)",
                                    transition: "all 0.3s",
                                    cursor: "pointer",
                                    zIndex: zoom === idx ? 2 : 1,
                                    position: "relative",
                                    background: "#fff"
                                }}
                            />
                        </a>
                    ))}
                </Box>
                <Typography variant="caption" sx={{ mt: 2, color: "#888", display: "block", textAlign: "center" }}>
                    Haz clic en un afiche para agrandarlo. Haz clic de nuevo para volver o haz clic cuando esté grande para ir al enlace.
                </Typography>

                {/* Modal Carousel para afiche 3 */}
                <Modal
                    open={carouselOpen}
                    onClose={handleCarouselClose}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Box sx={{
                        outline: 'none',
                        background: '#012d3e',
                        borderRadius: 2,
                        p: { xs: 1, sm: 2 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '98vw'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            width: '100%',
                            justifyContent: 'center'
                        }}>
                            <IconButton onClick={handlePrev} sx={{ color: '#fff' }}>
                                <ArrowBackIosNewIcon />
                            </IconButton>
                            <Box sx={{
                                width: { xs: '80vw', sm: '60vw', md: '600px' },
                                height: { xs: '60vw', sm: '50vw', md: '700px' },
                                maxWidth: '98vw',
                                maxHeight: '80vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={afiches[2].carousel[carouselIdx]}
                                    alt={`Afiche 3 - ${carouselIdx + 1}`}
                                    className={carouselAnim}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        borderRadius: "12px",
                                        background: "#fff",
                                        transition: "transform 0.25s cubic-bezier(.4,2,.6,1), opacity 0.25s",
                                        transform: carouselAnim === "slide-left"
                                            ? "translateX(60px) scale(0.95)"
                                            : carouselAnim === "slide-right"
                                                ? "translateX(-60px) scale(0.95)"
                                                : "translateX(0) scale(1)",
                                        opacity: carouselAnim ? 0.7 : 1
                                    }}
                                />
                            </Box>
                            <IconButton onClick={handleNext} sx={{ color: '#fff' }}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="caption" sx={{ color: "#fff" }}>
                            Imagen {carouselIdx + 1} de {afiches[2].carousel.length}
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </>
    );
};

export default Afiches;