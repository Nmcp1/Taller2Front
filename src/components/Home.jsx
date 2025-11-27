import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";

export default function Home() {
  return (
    <div className="p-6 flex justify-content-center">
      <div className="w-full" style={{ maxWidth: "1200px" }}>
        
        {/* HEADER */}
        <div className="flex align-items-center mb-5">
          <i className="pi pi-paw text-5xl mr-3"></i>
          <div>
            <h1 className="m-0 text-4xl">Quiénes Somos</h1>
            <p className="text-xl mt-2">
              Un proyecto dedicado a mostrar la belleza de los gatos con una experiencia visual limpia.
            </p>
          </div>
        </div>

        {/* SECCIÓN PRINCIPAL */}
        <div className="grid mb-6">
          
          {/* Descripción */}
          <div className="col-12 lg:col-6 flex align-items-center">
            <Card className="shadow-3 p-4 w-full h-full">
              <h2 className="text-2xl mb-3 flex align-items-center">
                <i className="pi pi-info-circle mr-2"></i> Sobre el Proyecto
              </h2>
              <p className="text-lg line-height-3">
                Creamos <strong>gatIG</strong> como un espacio simple pero encantador, donde los usuarios pueden 
                disfrutar de imágenes de gatos en un carrusel limpio y sin distracciones.  
                La idea es que el usuario entre, vea gatos bonitos, y nada más compita por su atención.  
              </p>
            </Card>
          </div>

          {/* Imagen ilustrativa */}
          <div className="col-12 lg:col-6 flex justify-content-center">
            <Card className="shadow-3 p-4 w-full h-full flex flex-column align-items-center">
                <h2 className="text-2xl mb-3 flex align-items-center">
                <i className="pi pi-image mr-2"></i> Ejemplo de gatos que se pueden ver
                </h2>
                <img
                src="https://preview.redd.it/he-visto-a-personas-que-dicen-que-no-te-metas-con-una-chica-v0-yn4avphyl0sb1.png?auto=webp&s=c3f2d353390b82ba394885bd91f8effaac6326f9"
                alt="Abogato"
                style={{ maxWidth: "50%", borderRadius: "10px" }}
                />
                <p className="mt-3 text-lg text-center">
                El honorable <strong>Abogato</strong>, defensor oficial de las croquetas.
                </p>
            </Card>
          </div>
        </div>

        <Divider />

        {/* EQUIPO */}
        <h2 className="text-3xl text-center mb-4">
          <i className="pi pi-users mr-2"></i> Nuestro Equipo
        </h2>

        <div className="grid">
          <div className="col-12 md:col-6 flex justify-content-center">
            <Card className="p-5 shadow-3 text-center w-10">
              <Avatar icon="pi pi-user" size="xlarge" className="mb-3" />
              <h3 className="text-2xl m-0">Maximiliano Conejo Meza</h3>
              <p className="mt-2 text-lg">Desarrollador & Creativo</p>
            </Card>
          </div>

          <div className="col-12 md:col-6 flex justify-content-center">
            <Card className="p-5 shadow-3 text-center w-10">
              <Avatar icon="pi pi-user" size="xlarge" className="mb-3" />
              <h3 className="text-2xl m-0">Ashley Iturriaga Bastías</h3>
              <p className="mt-2 text-lg">Diseño & Experiencia de Usuario</p>
            </Card>
          </div>
        </div>

        <Divider />

        {/* MISIÓN FINAL */}
        <div className="mt-5">
          <Card className="shadow-3 p-4">
            <h2 className="text-2xl flex align-items-center mb-3">
              <i className="pi pi-heart mr-2"></i> Nuestra misión
            </h2>
            <p className="text-xl line-height-3">
              Mostrar gatos. Solo gatos.  
              Sin botones molestos, sin banners, sin distracciones.  
              Un carrusel elegante y directo, donde cada imagen sea la protagonista.  
            </p>
          </Card>
        </div>

      </div>
    </div>
  );
}
