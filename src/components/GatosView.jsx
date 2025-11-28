import React, { useContext, useEffect } from "react";
import { GatosContext } from "../providers/context";
import GatosCarrusel from "../components/GatosCarrusel";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

export default function GatosView() {
  const { cargarGatos, gatos, loading } = useContext(GatosContext);

  useEffect(() => {
    cargarGatos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <ProgressSpinner
          style={{ width: "150px", height: "150px" }}
          strokeWidth="4"
          fill="var(--surface-ground)"
          animationDuration="1.5s"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-content-center mt-4">
      <div className="surface-card p-4 shadow-2 border-round" style={{ width: "80%", maxWidth: "900px" }}>
        
        {/* Carrusel */}
        <div className="mb-4">
          <GatosCarrusel gatos={gatos} />
        </div>

        {/* Botón */}
        <div className="flex justify-content-center">
          <Button
            label="Recargar Gatos"
            icon="pi pi-refresh"
            className="p-button-rounded p-button-warning"
            onClick={cargarGatos}
          />
        </div>
      </div>
    </div>
  );
}
