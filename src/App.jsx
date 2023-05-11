import { useState } from 'react'
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

  return (
    <div className='conteiner'>
      <div className='navbar'>
        <h1 className="titulo" variant="body2" color="inherit"  sx={{fontSize:"20px", mt: 1 }}>
        JUSTICIA AL ALCANCE DE TOD@S
        </h1>
      </div>
      <Box sx={{ display:"flex",  justifyContent: "center",paddingTop:"8vh", /* Centrar horizontalmente */
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
            sx={{}}
          />
          <a href="https://twitter.com/intent/tweet?text=No%20pagues%20tu%20cae%20enterate%20aqui%20&url=http%3A%2F%2Fequidadlegal.cl&hashtags=programación,html" target="_blank"><h1 translate="no" className='prescribelaw'>#PRESCRIBELAW</h1></a>
                  
          <Box sx={{paddingTop:"20%",position:"fixed",display:"flex",flexDirection:"column",justifyContent:"space-between",  bottom: 0,
  right: 0}}>
            <Box
              component="img"
              src="/wsp3.png"
              width="15%"
              sx={{marginLeft: "auto"}}
              onClick={()=>{redirigirWsp()}}
            />
             <Box
              component="img"
              width="15%"
              src="/ig3.png"
              sx={{marginLeft: "auto"}}
              onClick={()=>{redirigir()}}
            />
          </Box>

        </div>
  )
}

export default App
