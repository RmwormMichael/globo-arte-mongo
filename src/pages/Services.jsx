import React from "react";
import nuestrosServicios from "../assets/logo/nuestrosServicios.png";
import globoArco from "/img/1.jpg";
import bouquets from "/img/2.jpg";
import disenosEspeciales from "/img/11.jpg";

export default function ServicesSection() {
  return (
    <div className="contenedorServicios" id="services">
      <div className="services">
        <h1 className="tituloImagen">
          <img
            src={nuestrosServicios}
            alt="Nuestros Servicios"
            className="tituloImagen "
          />
        </h1>

        <p className="subtitulo">
          Transformamos tus ideas en realidad con creatividad y profesionalismo
        </p>

        <div className="servicesWrapper">
          <div
            className="service"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          >
            <div className="image-container">
              <img src={globoArco} alt="Globos con Helio" />
            </div>
            <h4>Globos con Helio</h4>
            <p>
              Llevamos la magia de los globos flotantes directamente a tu
              evento, creando un ambiente elegante, alegre y lleno de encanto.
              Ideal para celebraciones especiales que buscan sorprender y
              emocionar.
            </p>
          </div>

          <div
            className="service"
            data-aos="fade-up-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="image-container">
              <img src={bouquets} alt="Bouquets" />
            </div>
            <h4>Bouquets</h4>
            <p>
              Diseños cuidadosamente creados para embellecer tu hogar u oficina,
              aportando estilo, color y armonía en cada detalle. Perfectos para
              fechas especiales y momentos que merecen celebrarse.
            </p>
          </div>

          <div
            className="service"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="image-container">
              <img src={disenosEspeciales} alt="Diseños Especiales" />
            </div>
            <h4>Diseños Especiales</h4>
            <p>
              Creamos decoraciones personalizadas que reflejan tu idea y estilo,
              transformando cualquier evento en una experiencia única. Cuéntanos
              tu visión y la convertiremos en una celebración inolvidable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
