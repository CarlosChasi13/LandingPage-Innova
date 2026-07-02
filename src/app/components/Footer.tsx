export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-name">
            <img src="/icons/logo_equinox_icon.png" alt="" className="footer-logo-icon" />
            Equinox
          </div>
          <p>Estudio de desarrollo web de alto impacto con sede en Ecuador. Construimos lo que otros no pueden.</p>
        </div>
        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Desarrollo Web</a></li>
            <li><a href="#">E-Commerce</a></li>
            <li><a href="#">SaaS & Apps</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Compañía</h4>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Carreras</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="#">hola@equinox.ec</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Equinox. Todos los derechos reservados.</span>
        <span>Hecho con ✦ en Ecuador · <a href="#">Política de privacidad</a></span>
      </div>
    </footer>
  );
}
