function componenteFooter(element) {
  const newComponente = document.createElement("div");
  newComponente.className = "footer";
  newComponente.innerHTML = `      <div class="footer__container">
  <div class="footer__container-img">
    <img
      src="./components/footer-comp/images/logoEG.png"
      class="footer__logo"
      alt=""
      width="50px"
      height="45px"
    />
  </div>
  <div class="footer__container-secciones">
    <a class="footer__secciones" href="./index.html">
      <img src="./components/footer-comp/images/home-footer.png" alt="" />
      <p class="footer__secciones">Home</p>
    </a>
    <a class="footer__secciones" href="./servicios.html">
      <img
        src="./components/footer-comp/images/services-footer.png"
        alt=""
      />
      <p class="footer__secciones">Servicios</p>
    </a>
    <a class="footer__secciones" href="./contacto.html">
      <img
        src="./components/footer-comp/images/contacto-footer.png"
        alt=""
      />
      <p class="footer__secciones">Contacto</p>
    </a>
  </div>
  <div class="contenedor-links">
    <a
      class="footer__container-icons"
      href="https://www.linkedin.com/in/ezequielgimenez/"
    >
      <img
        src="./components/footer-comp/images/linkedin-icon.png"
        class="footer__icons"
        alt=""
      />
    </a>
    <a
      class="footer__container-icons"
      href="https://github.com/ezequielgimenez"
    >
      <img
        src="./components/footer-comp/images/github-icon.png"
        class="footer__icons"
        alt=""
      />
    </a>
    <a
      class="footer__container-icons"
      href="https://twitter.com/_EzeGimenez/"
    >
      <img
        src="./components/footer-comp/images/twitter-icon.png"
        class="footer__icons"
        alt=""
      />
    </a>
  </div>
</div>`;
  element.appendChild(newComponente);
}
