import { useState,useEffect } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
function App() {
  function redirigir() {
    window.location.replace("https://www.instagram.com/equidadlegal.cl/");
  }
  function redirigirWsp() { 
    window.location.replace("https://wa.me/56971997994/?text=Hola, me podrias enviar mas informacion?");
  }
  const [hashtag,setHashtag]=useState([{nombre:"#FONDOSOLIDARIO",link:"https://twitter.com/intent/tweet?text=No%20pagues%20tu%20cae%20enterate%20aqui%20&url=http%3A%2F%2Fequidadlegal.cl&hashtags=programación,html"},{nombre:"#NOMASCAE",link:"https://www.instagram.com/equidadlegal.cl"},{nombre:"#PRESCRIBELAW",link:"https://www.instagram.com/equidadlegal.cl"}]);
  const [position,setPosition]=useState(0);
  const[touch,setTouch]=useState(false);
  const heartbeat = () => ({
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.2)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  });
  function cambiar(){
  }
  useEffect(() => {
    const intervalID = setInterval(() => {
      setPosition((position + 1) % hashtag.length);
    }, 2000);
    return () => clearInterval(intervalID);
  }, [position, hashtag.length]);

  return (
    <div className='conteiner'>
      <div className='navbar'>
        <h1 className="titulo" variant="body2" color="inherit"  sx={{fontSize:"20px", mt: 1 }}>
        JUSTICIA AL ALCANCE DE TOD@S
        </h1>
      </div>
      <Box sx={{ display:"flex",  justifyContent: "center",paddingTop:"5vh",paddingBottom:"5vh", /* Centrar horizontalmente */
  alignItems: "center",flexDirection:"column",width:"100vh"}}>
        <Box
              width="50%"
              component="img"
              src="/30.png"
              sx={{
                animation: 'rotate 2s linear infinite',
              '@keyframes rotate': {
                from: {
                  transform: 'rotate(0deg)',
                },
                to: {
                  transform: 'rotate(360deg)',
                }
              }}}
            />
      </Box>
        <Box
            component="img"
            src="/equidad1.png"
            width="100%"
            height="100%"
            paddingBottom="12vh"
            sx={{}}
          />
          <a href={hashtag[position].link} target="_blank"><h1 translate="no" className='prescribelawTouch'>{hashtag[position].nombre} </h1></a>    
          <Box sx={{paddingTop:"20%",position:"fixed",display:"flex",flexDirection:"column",justifyContent:"space-between",  bottom: 0,
  right: 0}}>
    <h2 className='prescribelaw2'>Contactanos</h2>
            <Box
              component="img"
              src="/wsp3.png"
              width="15%"
              sx={{marginLeft: "auto",animation:(touch)? 'heartbeat 2s infinite': "none",userSelect: 'none',}}
              onClick={()=>{redirigirWsp()}}
              onTouchStart={() => {
                setTouch(true);
              }}
              onTouchEnd={() => {
                setTouch(false);
              }}
            />
             <Box
              component="img"
              width="10%"
              src="/ig3.png"
              sx={{marginLeft: "auto",
              '&:hover': {
                animation: `${heartbeat} 2s infinite`,
              }}}
              onClick={()=>{redirigir()}}
              paddingRight="10px"

            />
          </Box>

        </div>
  )
}

export default App
