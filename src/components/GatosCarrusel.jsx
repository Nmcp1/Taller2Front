import React from 'react'
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';


function GatosCarrusel({gatos}) {

const gatosTemplate = (gato) => {
    return (
        <div className="border-1 surface-border border-round m-2 text-center py-4 px-3">
            <div className="mb-3">
                <img
                    src={gato.url}
                    alt={`Gato ${gato.id}`}
                    className="shadow-2 border-round"
                    style={{
                        width: "300px",
                        height: "250px",
                        objectFit: "fill"
                    }}
                />
            </div>
        </div>
    );
};

  return (
    <div className="card">
        <Carousel value={gatos} numVisible={1} numScroll={1}  itemTemplate={gatosTemplate} />
    </div>
  )
}

export default GatosCarrusel
