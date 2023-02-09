function recibirDataServices() {
  const servicios = document.querySelector(".servicios");
  fetch(
    "https://cdn.contentful.com/spaces/o191ztp8knl5/environments/master/entries?access_token=ggHBf0q4dxL27dlP254Sb11f49bVUf1fi9XxmbAt1mw&content_type=serviciosYTrabajos"
  )
    .then((data) => data.json())
    .then((dataRecibida) => {
      console.log(dataRecibida.includes.Asset[2]);
      addTitleServices(dataRecibida, servicios);
      addCardsServices(dataRecibida, servicios);
    });
}

function addTitleServices(data, container) {
  const componenteEl = document.createElement("div");
  componenteEl.className = "servicios__container-h3";
  componenteEl.innerHTML = `
    <h3 class="servicios__title">
    ${data.items[0].fields.titulo} <span class="services__title-color">${data.items[0].fields.tituloCard}</span>
  </h3>`;
  container.appendChild(componenteEl);
}

function addCardsServices(data, container) {
  const componenteEl = document.createElement("div");
  componenteEl.className = "servicios__container-cards";
  componenteEl.innerHTML = `
    <div class="servicios__cards">
    <img class="card-img" src=${data.includes.Asset[1].fields.file.url} alt="" />
    <h4 class="card_title">${data.items[1].fields.titulo}</h4>
    <p class="card_parrafo">
      ${data.items[1].fields.descripcion.content[0].content[0].value}
    </p>
  </div>
  <div class="servicios__cards">
    <img class="card-img" src=${data.includes.Asset[0].fields.file.url} alt="" />
    <h4 class="card_title"> ${data.items[2].fields.titulo}</h4>
    <p class="card_parrafo">
      ${data.items[2].fields.descripcion.content[0].content[0].value}
    </p>
  </div>
  <div class="servicios__cards">
    <img class="card-img" src=${data.includes.Asset[2].fields.file.url} alt="" />
    <h4 class="card_title"> ${data.items[3].fields.titulo}  </h4>
    <p class="card_parrafo">
      ${data.items[3].fields.descripcion.content[0].content[0].value}
    </p>
  </div>`;
  container.appendChild(componenteEl);
}

recibirDataServices();
