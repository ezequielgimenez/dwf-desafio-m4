function menuBurger() {
  const imgAbreVentanaEl = document.querySelector(".header__menu-abre");
  const imgCierraVentanaEl = document.querySelector(".cierra-ventana");

  const contenidoMenuEl = document.querySelector(".header__contenido-menu");

  imgAbreVentanaEl.addEventListener("click", () => {
    contenidoMenuEl.style.display = "inherit";
  });

  imgCierraVentanaEl.addEventListener("click", () => {
    contenidoMenuEl.style.display = "";
  });
}

menuBurger();
