import React, { useState } from 'react'
import { GatosContext } from './context'
import { getGatos } from '../services/GatosService';

function GatosProvider({children}) {
    
  const [gatos,setGatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const cargarGatos = async()=>{
    setLoading(true);
    getGatos().then((response)=>setGatos(response)).finally(()=>{setLoading(false);});
    
  }
  const globalState = {gatos,cargarGatos, loading}

  return (
    <GatosContext.Provider value={globalState}>{children}</GatosContext.Provider>
  )
}

export default GatosProvider
