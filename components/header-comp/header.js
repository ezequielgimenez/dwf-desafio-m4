function componenteHeader(element) {
  newComponente = document.createElement("div");
  newComponente.className = "header";
  newComponente.innerHTML = `
  <a class="header__logo" href="./index.html">
  <img
    href="./index.html"
    class="img-logo"
    src="./components/header-comp/images/logoEG.png"
    alt=""
  />
</a>
<div class="header__menu-abre">
  <img src="./components/header-comp/images/menu.png" alt="logo" />
</div>

<div class="header__container-links">
  <a class="header__enlaces" href="./portfolio.html">Portfolio</a>
  <a class="header__enlaces" href="./servicios.html">Servicios</a>
  <a class="header__enlaces" href="./contacto.html">Contacto</a>
</div>
<div class="header__contenido-menu">
  <div class="header__container-button">
    <img
      class="cierra-ventana"
      src="./components/header-comp/images/menu-cierre.png"
      alt=""
    />
  </div>

  <div class="ventana__contenido">
    <div class="container__link">
      <a class="ventana__title" href="./portfolio.html">Portfolio</a>
    </div>
    <div class="container__link">
      <a class="ventana__title" href="./servicios.html">Servicios</a>
    </div>
    <div class="container__link">
      <a class="ventana__title" href="./contacto.html">Contacto</a>
    </div>
  </div>
</div>`;
  element.appendChild(newComponente);
}
