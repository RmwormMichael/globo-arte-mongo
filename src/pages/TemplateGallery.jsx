import { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import "../App.css";
import { Eyes, Haunted } from "react-halloween";
import Snowfall from "../assets/snowfall/Snowfall";
import "../assets/snowfall/snowfall.css";

// Importar las imágenes de fondo
import fondoArcos from "../assets/img/fondo-bouquets.jpg";
import fondoBouquets from "../assets/img/fondoUno.jpg";
import fondoDisenos from "../assets/img/halloween/halloweenTwo.jpg";
import fondoNavidad from "../assets/img/navidad.jpg";

// Datos de las imágenes centralizado
const categoriesData = {
  arcos: {
    background: fondoArcos,
    images: [
      { src: "/src/assets/img/arcos/1.jpg", alt: "Arco decorativo 1" },
      { src: "/src/assets/img/arcos/2.jpg", alt: "Arco decorativo 2" },
      { src: "/src/assets/img/arcos/3.jpg", alt: "Arco decorativo 3" },
      { src: "/src/assets/img/arcos/4.jpg", alt: "Arco decorativo 4" },
      { src: "/src/assets/img/arcos/5.jpg", alt: "Arco decorativo 5" },
      { src: "/src/assets/img/arcos/6.jpg", alt: "Arco decorativo 6" },
      { src: "/src/assets/img/arcos/7.jpg", alt: "Arco decorativo 7" },
      { src: "/src/assets/img/arcos/8.jpg", alt: "Arco decorativo 8" },
      { src: "/src/assets/img/arcos/9.jpg", alt: "Arco decorativo 9" },
      { src: "/src/assets/img/arcos/10.jpg", alt: "Arco decorativo 10" },
    ],
    description: "Arcos decorativos elegantes para bodas, eventos y celebraciones especiales. Diseños personalizados con flores frescas y artificiales que crean un ambiente mágico."
  },

  bouquets: {
    background: fondoBouquets,
    images: [
      { src: "/src/assets/img/bouquets/1.jpg", alt: "Bouquet 1" },
      { src: "/src/assets/img/bouquets/2.jpg", alt: "Bouquet 2" },
      { src: "/src/assets/img/bouquets/3.jpg", alt: "Bouquet 3" },
      { src: "/src/assets/img/bouquets/4.jpg", alt: "Bouquet 4" },
      { src: "/src/assets/img/bouquets/5.jpg", alt: "Bouquet 5" },
      { src: "/src/assets/img/bouquets/6.jpg", alt: "Bouquet 6" },
      { src: "/src/assets/img/bouquets/7.jpg", alt: "Bouquet 7" },
      { src: "/src/assets/img/bouquets/8.jpg", alt: "Bouquet 8" },
      { src: "/src/assets/img/bouquets/9.jpg", alt: "Bouquet 9" },
      { src: "/src/assets/img/bouquets/10.jpg", alt: "Bouquet 10" },
    ],
    description: "Ramos de flores exquisitos para novias, damas de honor y ocasiones especiales. Combinaciones únicas que expresan emociones y complementan cualquier estilo."
  },

  diseños: {
    background: fondoDisenos,
    images: [
      { src: "/src/assets/img/especializados/1.jpg", alt: "Diseño especial 1" },
      { src: "/src/assets/img/especializados/2.jpg", alt: "Diseño especial 2" },
      { src: "/src/assets/img/especializados/3.jpg", alt: "Diseño especial 3" },
      { src: "/src/assets/img/especializados/4.jpg", alt: "Diseño especial 4" },
      { src: "/src/assets/img/especializados/5.jpg", alt: "Diseño especial 5" },
      { src: "/src/assets/img/especializados/6.jpg", alt: "Diseño especial 6" },
      { src: "/src/assets/img/especializados/7.jpg", alt: "Diseño especial 7" },
      { src: "/src/assets/img/especializados/8.jpg", alt: "Diseño especial 8" },
      { src: "/src/assets/img/especializados/9.jpg", alt: "Diseño especial 9" },
      {
        src: "/src/assets/img/especializados/10.jpg",
        alt: "Diseño especial 10",
      },
    ],
    description: "Diseños espeluznantes y creativos para Halloween. Decoraciones temáticas que transforman cualquier espacio en una experiencia terroríficamente maravillosa."
  },

  navidad: {
    background: fondoNavidad,
    images: [
      {
        src: "/src/assets/img/especializados/10.jpg",
        alt: "Decoración navideña 1",
      },
      {
        src: "/src/assets/img/especializados/9.jpg",
        alt: "Decoración navideña 2",
      },
      {
        src: "/src/assets/img/especializados/8.jpg",
        alt: "Decoración navideña 3",
      },
    ],
    description: "Decoraciones navideñas que evocan la magia de la temporada. Diseños cálidos y festivos para crear memorias inolvidables durante las fiestas."
  },
};

export default function TemplatesGallery() {
  const [activeCategory, setActiveCategory] = useState("arcos");

  return (
    <div className="contenedorDos" id="templates">
      <div
        className="contenedorDos-bg"
        style={{
          backgroundImage: `url(${categoriesData[activeCategory].background})`,
        }}
      />
      {/* Overlay */}
      <div className="background-overlay"></div>
      {activeCategory === "navidad" && <Snowfall />}

      {/* NAV + Haunted al pasar el mouse */}
      <nav className="navCategory">
        <button
          className={`btn btn-light hvr-buzz-out ${
            activeCategory === "arcos" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("arcos")}
        >
          Arcos
        </button>

        <button
          className={`btn btn-light hvr-buzz-out ${
            activeCategory === "bouquets" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("bouquets")}
        >
          Bouquets
        </button>

        <button
          className={`btn btn-light hvr-buzz-out ${
            activeCategory === "navidad" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("navidad")}
        >
          Navidad
        </button>

        <Haunted>
          <button
            className={`btn btn-light hvr-buzz-out ${
              activeCategory === "diseños" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("diseños")}
          >
            Halloween
          </button>
        </Haunted>
      </nav>

      {/* OJOS HALLOWEEN SOLO EN DISEÑOS */}
      {activeCategory === "diseños" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
            zIndex: 20,
          }}
        >
          <Eyes
            width={250}
            eyeBallColor="white"
            irisColor="#8a0303"
            pupilColor="black"
            animationTime={1}
            pupilSize={1.2}
            follow={true}
          />
        </div>
      )}

      {/* Galería dinámica con marco */}
      <div className="gallery-frame" 
           id="mainCategory"
           data-aos="fade-up"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine">
        
        {/* Panel izquierdo: Descripción */}
        <div className="description-panel">
          <div className="description-content">
            <h2 className="category-title">
              {activeCategory === "arcos" && "Arcos Decorativos"}
              {activeCategory === "bouquets" && "Bouquets"}
              {activeCategory === "diseños" && "Halloween"}
              {activeCategory === "navidad" && "Navidad"}
            </h2>
            <p className="category-description">
              {categoriesData[activeCategory].description}
            </p>
            
            {/* Indicadores de características según categoría */}
            <div className="category-features">
              {activeCategory === "arcos" && (
                <>
                  <span className="feature-tag">🌹 Flores frescas</span>
                  <span className="feature-tag">✨ Personalizado</span>
                  <span className="feature-tag">🎉 Para eventos</span>
                </>
              )}
              {activeCategory === "bouquets" && (
                <>
                  <span className="feature-tag">💐 Variedad floral</span>
                  <span className="feature-tag">👰 Para novias</span>
                  <span className="feature-tag">🎁 Empaque especial</span>
                </>
              )}
              {activeCategory === "diseños" && (
                <>
                  <span className="feature-tag">👻 Temático</span>
                  <span className="feature-tag">🕸️ Decoración única</span>
                  <span className="feature-tag">🎃 Espeluznante</span>
                </>
              )}
              {activeCategory === "navidad" && (
                <>
                  <span className="feature-tag">🎄 Navideño</span>
                  <span className="feature-tag">🌟 Brillante</span>
                  <span className="feature-tag">🦌 Festivo</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Panel derecho: Carrusel */}
        <div className="carousel-panel">
          <GalleryGrid
            key={activeCategory}
            category={activeCategory}
            images={categoriesData[activeCategory].images}
          />
        </div>
      </div>
    </div>
  );
}