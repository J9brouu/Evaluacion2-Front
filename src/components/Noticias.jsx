import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';

export default function AccordionExpandIcon() {
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
                NOTICIAS
            </Typography>
            <Box         
                sx={{
                    padding: { xs: 1, sm: 2 },
                    margin: '0 auto',
                    maxWidth: { xs: '100%', sm: '90%', md: '800px' },
                    backgroundColor: '#012d3e',
                    borderRadius: '10px'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        textAlign: 'center',
                        fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                        color: '#fff',
                    }}
                >
                    Municipio Reconoce a Dirigentes Sociales que Lucharon para que Cholchol sea Comuna
                </Typography>
                <Accordion
                    sx={{
                        margin: '8px 0',
                        padding: '0',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                            padding: '0 12px',
                            minHeight: '36px',
                            '& .MuiAccordionSummary-content': { margin: '0' },
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '0.95rem', sm: '1rem' },
                            }}
                        >
                            Noticia
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: { xs: '8px 4px', sm: '8px 12px' },
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            Por primera vez en la historia de la comuna el municipio, liderado por el alcalde, Álvaro Labraña, rindió homenaje a los vecinos que trabajaron durante años para lograr que Cholchol fuera un territorio autónomo y se independizara de Nueva Imperial en el año 2004.
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            En una emotiva ceremonia el municipio de Cholchol, encabezado por el alcalde, Álvaro Labraña, rindió homenaje a los vecinos y dirigentes sociales, que, con su compromiso y esfuerzo, formaron parte fundamental del proceso que permitió la creación de la comuna hace más de dos décadas. El significativo evento que se llevó a cabo en dependencias del edificio municipal reunió a diversas autoridades, entre ellas, los senadores, José García Ruminot y Jaime Quintana, la directora del Fosis, Tamara Torres, los concejales, Bernardita Viscarra, Ismel Cayul, Andrés Navarrete y Gonzalo Troppa, además de los representantes de organizaciones sociales y vecinos, quienes reconocieron, el legado de aquellos líderes que formaron parte del Comité “Pro-Restitución de la Comuna de Cholchol” quienes lucharon por la autonomía administrativa de la zona.
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            Durante la ceremonia de reconocimiento, el alcalde Labraña, entregó distinciones a quienes lideraron históricas gestiones y movilizaciones para lograr que Cholchol se independizara de Nueva Imperial y fuera oficialmente reconocida como comuna el 12 de abril del año 2004. Además, durante la jornada, se realizó un reconocimiento póstumo a lideres que ya no están presentes físicamente y que fueron actores claves para lograr el anhelado sueño de convertir a cholchol en comuna.
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            La máxima autoridad comunal, Álvaro Labraña, destacó en su discurso la importancia de honrar a quienes "con visión, perseverancia y amor por esta tierra, marcaron un antes y un después en la historia de Cholchol". Asimismo, invitó a las nuevas generaciones a inspirarse en el legado de los dirigentes sociales para seguir construyendo un futuro de progreso y unidad.
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            “Como municipio estamos pagando una deuda histórica con nuestros vecinos. Hoy es un día donde marcamos un hito, donde reconocimos a quienes hicieron posible que Cholchol se transformara en una comuna y como alcalde estoy muy contento, agradecido de poder haber podido generar esta instancia, la que, para nosotros, es un acto de justicia qué llega luego de 21 años, donde nunca ante se reconoció su tremenda labor. Mi compromiso es mantener el legado de estos hombres y mujeres que lucharon para que Cholchol se convirtiera en lo que es hoy, una comuna con identidad, historia y esperanza”, precisó el jefe comunal.
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            Por su parte, María Ignacia Manríquez, dirigente social que formó parte del comité Procomuna de Cholchol, agradeció el reconocimiento y dijo que, “altamente agradecida, muy agradecida porque eso motiva a los dirigentes, a las personas a soñar y a pensar que, se puede contar con el apoyo de la autoridad y con eso, se pueden lograr muchas cosas. 
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            Este reconocimiento nos llega tanta tarde, pero a la vez nos sorprende gratamente porque siento que esto nos va a motivar aún más a seguir luchando por nuestro Cholchol”. Mientras que para, Elisa Manríquez, miembro del comité de adelanto que permitió convertir a cholchol en comuna, dijo que, “estoy muy sorprendida, como muchos de los que estamos aquí. Estoy muy emocionada, porque esto se pude haber hecho muchos años atrás y se valora. Esto fue es un acto muy significativo, con mucha emoción lo recibimos con agradecimiento, también porque muchos ya partieron de nuestros amigos, nuestros colegas que trabajaron con nosotros. Feliz de que se haga justicia y que nos reconozcan en vida”.
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, lineHeight: 1.4 }}>
                            Cabe señalar que la ceremonia finalizó en el frontis de la municipalidad, donde se instaló una escultura a gran escala de una trapelacucha, figura representativa del pueblo mapuche, la que, además, consideró una placa conmemorativa en honor al Comité Procomuna agradeciendo su aporte al desarrollo de Cholchol.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        margin: '8px 0',
                        padding: '0',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        sx={{
                            padding: '0 12px',
                            minHeight: '36px',
                            '& .MuiAccordionSummary-content': { margin: '0' },
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '0.95rem', sm: '1rem' },
                            }}
                        >
                            Imágenes
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: { xs: '8px 4px', sm: '8px 12px' },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: { xs: 1, sm: 2 },
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src="src/assets/m1.png"
                                alt="Descripción de la imagen 1"
                                style={{
                                    width: '100%',
                                    maxWidth: 180,
                                    height: 'auto',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="src/assets/m2.png"
                                alt="Descripción de la imagen 2"
                                style={{
                                    width: '100%',
                                    maxWidth: 180,
                                    height: 'auto',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="src/assets/m3.png"
                                alt="Descripción de la imagen 3"
                                style={{
                                    width: '100%',
                                    maxWidth: 180,
                                    height: 'auto',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="src/assets/m4.png"
                                alt="Descripción de la imagen 4"
                                style={{
                                    width: '100%',
                                    maxWidth: 180,
                                    height: 'auto',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="src/assets/m5.png"
                                alt="Descripción de la imagen 5"
                                style={{
                                    width: '100%',
                                    maxWidth: 180,
                                    height: 'auto',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="src/assets/m6.png"
                                alt="Descripción de la imagen 6"
                                style={{
                                    width: '100%',
                                    maxWidth: 180,
                                    height: 'auto',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                            <img
                                src="src/assets/m7.png"
                                alt="Descripción de la imagen 7"
                                style={{
                                    width: '100%',
                                    maxWidth: 180,
                                    height: 'auto',
                                    aspectRatio: '1/1',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
}