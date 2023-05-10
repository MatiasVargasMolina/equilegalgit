import { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
function App() {
  function redirigir() {
    window.location.replace("https://www.instagram.com/equidadlegal.cl/");
  }

  return (
    <div className='conteiner'>
      <div className='navbar'>
        <h1 className="titulo" variant="body2" color="inherit"  sx={{fontSize:"20px", mt: 1 }}>
        JUSTICIA AL ALCANCE DE TOD@S
        </h1>
      </div>
      <Box sx={{ display:"flex",  justifyContent: "center", /* Centrar horizontalmente */
  alignItems: "center",flexDirection:"column",width:"100vh",paddingTop:"20%"}}>
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
            sx={{paddingTop:"20%"}}
          />
          <a href="https://twitter.com/intent/tweet?text=No%20pagues%20tu%20cae%20enterate%20aqui%20&url=http%3A%2F%2Fequidadlegal.cl&hashtags=programación,html" target="_blank"><h1 className='prescribelaw'>#PRESCRIBELAW</h1></a>
                  
          <Box sx={{paddingTop:"20%",position:"fixed",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <Box
              component="img"
              src="/wsp.png"
              width="20%"
              sx={{marginLeft: "auto"}}
            />
             <Box
              component="img"
              width="20%"
              src="/ig.png"
              sx={{marginLeft: "auto"}}
              onClick={()=>{redirigir()}}
            />
          </Box>

        </div>
  )
}

export default App
