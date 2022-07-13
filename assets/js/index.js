/* Globales */
const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src: "assets/img/campo.jpeg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src: "assets/img/playa.jpeg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src: "assets/img/centro.jpeg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src: "assets/img/rodante.webp",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas siempre todo se ve mejor",
      src: "assets/img/depto.jpeg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños",
      src: "assets/img/mansion.jpeg",
      rooms: 5,
      m: 500
    }
  ]

let tagPropiedades = document.querySelector(".propiedades")
let tagSpan = document.querySelector("h4 span")
let btnBuscar = document.querySelector("#btn-bsucar")

/* Métodos */
const inicializar = (totalPropiedades = []) => {
    let divPropiedad = ''

    for (propiedad of totalPropiedades) {
        divPropiedad +=
            `<div class="propiedad">
                <div class="img" style="background-image: url(${propiedad.src})"></div>
                <section>
                    <h5>${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${propiedad.rooms}</p>
                        <p>Metros: ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>`
    }

    tagPropiedades.innerHTML = divPropiedad
    tagSpan.innerHTML = totalPropiedades.length.toString()
}


/* Flujo */
inicializar(propiedadesJSON)
  