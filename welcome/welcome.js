function recibirDataWelcome() {
  const bienvenida = document.querySelector(".bienvenida"); //-->>>> BUSCAMOS EL CONTENEDOR vacio donde ira el componente creado

  fetch(
    "https://cdn.contentful.com/spaces/o191ztp8knl5/environments/master/entries?access_token=ggHBf0q4dxL27dlP254Sb11f49bVUf1fi9XxmbAt1mw&content_type=desafioM4"
  )
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log();
      addWelcome(datos, bienvenida);
    });
}

function addWelcome(datos, container) {
  const componenteEl = document.createElement("div");
  componenteEl.className = "container-bienvenida";
  componenteEl.innerHTML = `
          <div class="container-title">
          <h1 class="title-hola">${datos.items[1].fields.titulo}</h1>
          <h1 class="otro-color-title">${datos.items[1].fields.titulodos}</h1>
        </div>
        <img class="image1" src=${datos.includes.Asset[1].fields.file.url} alt="image" />`;
  container.appendChild(componenteEl);
}

recibirDataWelcome();
