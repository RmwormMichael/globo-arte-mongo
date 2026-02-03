import "../App.css";
import { Haunted } from "react-halloween";

export default function GalleryGrid({ images, category }) {
  const isHalloween = category === "diseños";

  return (
    <section className="sectionGallery">
      {/* DECORACIONES SOLO EN HALLOWEEN (posición absoluta, encima del carrusel) */}
      {isHalloween && (
        <div className="ghost-layer">
          <div className="web-left" aria-hidden="true"></div>
          <div className="web-right" aria-hidden="true"></div>
        </div>
      )}

      {/* CARRUSEL */}
      <div
        id={`carousel-${category}`}
        className="carousel slide carousel-fade customCarousel"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          {images.map((image, index) => {
            const imgElement = (
              <img
                src={image.src}
                className="d-block w-100 carouselImg"
                alt={image.alt}
              />
            );

            const content = isHalloween ? (
              <Haunted>{imgElement}</Haunted>
            ) : (
              imgElement
            );

            return (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTROLES DEBAJO */}
      <div className="carousel-controls-bottom">
        <button
          className="carousel-btn"
          type="button"
          data-bs-target={`#carousel-${category}`}
          data-bs-slide="prev"
        >
          ‹ Anterior
        </button>

        <button
          className="carousel-btn"
          type="button"
          data-bs-target={`#carousel-${category}`}
          data-bs-slide="next"
        >
          Siguiente ›
        </button>
      </div>
    </section>
  );
}
