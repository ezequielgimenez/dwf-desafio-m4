function componenteForm(element) {
  const newComponente = document.createElement("form");
  newComponente.className = "formulario";
  newComponente.innerHTML = `
  <div class="formulario__container">
  <div class="formulario__container-title">
    <h3 class="formulario__title">Escribime</h3>
  </div>
  <div class="formulario__container-fields">
    <div class="field">
      <label id="name" for="text">Nombre</label>
      <input id="name" class="formulario__input" type="text" />
    </div>

    <div class="field">
      <label id="email" for="text">Email</label>
      <input id="email" class="formulario__input" type="text" />
    </div>

    <div class="field">
      <label id="email" for="text">Mensaje</label>
      <textarea
        name=""
        class="formulario__textarea"
        id="mensaje"
        cols="30"
        rows="10"
      ></textarea>
    </div>

    <div class="field">
      <button class="formulario__button">Enviar</button>
    </div>
  </div>
</div>`;
  element.appendChild(newComponente);
  sendForm();
}

function sendForm() {
  const myForm = document.querySelector(".formulario");
  myForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nameForm = myForm.querySelector("div.field input[id='name']").value;
    const emailForm = myForm.querySelector("div.field input[id='email']").value;
    const mensajeForm = myForm.querySelector(".formulario__textarea").value;

    objetoDataForm = {
      to: "ezequielezequiel9@gmail.com",
      message: `nombre: ${nameForm}, email: ${emailForm}, mensaje: ${mensajeForm} `,
    };
    const url = "https://apx-api.vercel.app/api/utils/dwf";

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objetoDataForm),
    });
    myForm.reset();
  });
}
