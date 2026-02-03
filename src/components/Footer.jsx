import "../App.css";
import facebook from "/img/facebook.svg";
import whatsapp from "/img/whatsapp.svg";
import instagram from "/img/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer">

        {/* Columna izquierda */}
        <div className="footerUno">
          <h5 className="contacto">Contáctanos</h5>
          <p className="dateFooter">📞 (+57) 314 211 99 46</p>
          <p className="dateFooter">📍 Bogotá, Colombia</p>
        </div>

        {/* Columna derecha */}
        <div className="footerDos">
          <p className="footerRedesTexto">
            Síguenos en nuestras redes
          </p>

          <div className="footerRedes">
            <a
              href="https://www.facebook.com/share/1DfwVBr9ZL/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgContact hvr-wobble-top"
                src={facebook}
                alt="Facebook"
              />
            </a>

            <a
              href="https://wa.me/3142119946"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgContact hvr-wobble-top"
                src={whatsapp}
                alt="WhatsApp"
              />
            </a>

            <a
              href="https://www.instagram.com/globo_arte_marthaperez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgContact hvr-wobble-top"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="footerCopy">
        © {new Date().getFullYear()} Globo Arte · Todos los derechos reservados
      </div>
    </footer>
  );
}
