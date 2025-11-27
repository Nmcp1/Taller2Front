import React, { useContext, useEffect } from 'react'
import { GatosContext } from '../providers/context'
import GatosCarrusel from '../components/GatosCarrusel';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

function GatosContainers() {
  const {cargarGatos, gatos, loading} = useContext(GatosContext);
  useEffect(()=>{
    cargarGatos();
  }, [])

  if (loading){
    return <ProgressSpinner style={{width: '200px', height: '200px'}} strokeWidth="2" fill="var(--surface-ground)" animationDuration="2s" />
  }
  
  return (
    <row>
    <div className="row">
    <GatosCarrusel gatos={gatos}></GatosCarrusel>
    </div>
    <div className="row">
        <Button label="Recargar Gatos" onClick={cargarGatos}/>
    </div>
      
    </row>
  )
}

export default GatosContainers
