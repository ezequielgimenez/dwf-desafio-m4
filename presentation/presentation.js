function recibirDataPresentacion() {
  const presentacion = document.querySelector(".presentacion"); //-->>>> BUSCAMOS EL CONTENEDOR vacio donde ira el componente creado

  fetch(
    "https://cdn.contentful.com/spaces/o191ztp8knl5/environments/master/entries?access_token=ggHBf0q4dxL27dlP254Sb11f49bVUf1fi9XxmbAt1mw&content_type=desafioM4"
  )
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log();
      addPresentacion(datos, presentacion);
    });
}

function addPresentacion(datos, container) {
  const componenteEl = document.createElement("div");
  componenteEl.className = "presentacion__contenido";
  componenteEl.innerHTML = `
          <div class="presentacion__title-parrafo">
            <h3 class="presentacion__title">${datos.items[0].fields.titulo}</h3>
            <p class="presentacion__parrafo">${datos.items[0].fields.descripcion.content[0].content[0].value}</p>
          </div>
          <div class="presentacion__container-img">
            <img class="presentacion__img" src=${datos.includes.Asset[0].fields.file.url} alt="" />
          </div>`;
  container.appendChild(componenteEl);
}

recibirDataPresentacion();
