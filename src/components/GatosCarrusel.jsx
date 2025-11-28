import React from "react";
import { Carousel } from "primereact/carousel";

export default function GatosCarrusel({ gatos }) {
  const gatosTemplate = (gato) => {
    return (
      <div className="flex justify-content-center">
        <img
          src={gato.url}
          alt={`Gato ${gato.id}`}
          className="shadow-2 border-round-lg"
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "350px",
            objectFit: "cover",
          }}
        />
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Carousel
        value={gatos}
        numVisible={1}
        numScroll={1}
        circular
        autoplayInterval={4000}
        itemTemplate={gatosTemplate}
      />
    </div>
  );
}
