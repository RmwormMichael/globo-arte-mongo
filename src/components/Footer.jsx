import "../App.css";
import facebook from "/img/facebook.svg";
import whatsapp from "/img/whatsapp.svg";
import instagram from "/img/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footerUno">
          <h5 className="contacto">Contáctanos</h5>
          <p className="dateFooter">Celular: (+57) 314 211 99 46</p>
          <p className="dateFooter">Bogotá, Colombia</p>
        </div>
        <div className="footerDos">
          <p>Siguenos en nuestras redes sociales:</p>

          <div>
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
              href="https://www.instagram.com/globo_arte_marthaperez?igsh=d3YycG52cDFyNWNw"
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
    </footer>
  );
}
