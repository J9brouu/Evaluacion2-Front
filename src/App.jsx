import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importaciones de componentes y librerías
import Footer from './components/Footer'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Banner from './components/Banner'
import Becas from './components/Becas'
import Noticias from './components/Noticias'
import { Box } from '@mui/material' // Importa Box de Material-UI
import Divider from './components/Divider' // Importa el componente Divider|
import Encuestas from './components/Encuestas' // Importa el componente Encuestas
import Afiches from './components/Afiches' // Importa el componente Afiches
import DynamicList from './components/DynamicList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Divider />
      <Box sx={{ mb: 4 }}>
        <Becas />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Divider />
        <Noticias />
      </Box>
      <Divider />
      <Encuestas />
      <Divider />
      <Afiches />
      <Divider />
      <ContactForm />
      <Divider />
      <DynamicList />
      <Divider />
      <Box
        sx={{
          backgroundColor: "#012d3e",
          mt: 4,
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          px: { xs: 1, sm: 2 },
        }}
      >
        <a
          href="https://www.youtube.com/@MunicipalidaddeCholcholOficial/streams"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '100%', maxWidth: 660, display: 'block' }}
        >
          <img
            src="src/assets/yt.png"
            alt="Imagen extra"
            style={{
              width: '100%',
              maxWidth: 660,
              height: 'auto',
              aspectRatio: '16/9',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              display: 'block'
            }}
          />
        </a>
      </Box>
      <Divider />
      <Footer />
    </>
  )
}

export default App
