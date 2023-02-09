function cargarResults(results) {
  const contenedor = document.querySelector(".trabajos");
  const template = document.querySelector("#template-card");

  for (const item of results) {
    //imagen
    const imagenEl = template.content.querySelector(".card-img");
    imagenEl.src = item.fields.image;

    //titulo
    const titleEl = template.content.querySelector(".trabajos__title");
    titleEl.textContent = item.fields.titulo;

    //descripcion
    const descriptionEl = template.content.querySelector(".card_parrafo");
    descriptionEl.textContent = item.fields.descripcion;

    //url
    const urlEl = template.content.querySelector(".ver");
    urlEl.href = item.fields.url;

    //clone and add to container "trabajos"
    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }
}

function recibirDataWorks() {
  fetch(
    "https://cdn.contentful.com/spaces/o191ztp8knl5/environments/master/entries?access_token=f-29-PMxDe-lbvmPiFoddeoxRea891nfsNqGf_lH-5Y&content_type=work"
  )
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      cargarResults(datos.items);
    });
}

recibirDataWorks();
