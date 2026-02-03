import React, { useState, useEffect } from "react";
import '../assets/css/seccionUno.css'

// Importa tus imágenes - reemplaza estos ejemplos con tus propias imágenes
// Si no tienes imágenes locales, puedes usar estas de ejemplo o reemplazar con tus propias
import img1 from "../assets/img/arcos/1.jpg"; // Reemplaza con tu imagen 1
import img2 from "../assets/img/arcos/2.jpg"; // Reemplaza con tu imagen 2
import img3 from "../assets/img/arcos/3.jpg"; // Reemplaza con tu imagen 3
import img4 from "../assets/img/arcos/4.jpg"; // Reemplaza con tu imagen 4
import img5 from "../assets/img/arcos/5.jpg"; // Reemplaza con tu imagen 5
import img6 from "../assets/img/arcos/6.jpg"; // Reemplaza con tu imagen 6
import img7 from "../assets/img/arcos/7.jpg"; // Reemplaza con tu imagen 7

export default function SeccionUno() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 7;

  // Array de imágenes con sus ángulos de rotación
  const slides = [
    { id: 1, img: img1, angle: "4deg" },
    { id: 2, img: img2, angle: "-8deg" },
    { id: 3, img: img3, angle: "-7deg" },
    { id: 4, img: img4, angle: "11deg" },
    { id: 5, img: img5, angle: "13deg" },
    { id: 6, img: img6, angle: "-17deg" },
    { id: 7, img: img7, angle: "20deg" },
  ];

  // Función para ir al siguiente slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= totalSlides) return 1;
      return prev + 1;
    });
  };

  // Función para ir al slide anterior
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev <= 1) return totalSlides;
      return prev - 1;
    });
  };

  // Función para ir a un slide específico
  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000); // 4 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contenedorUno" id="home">
      <div className="contenido-interno">
        {/* Carrusel de imágenes */}
        <div className="cards">
          {slides.map((slide) => (
            <React.Fragment key={slide.id}>
              <input
                type="radio"
                id={`radio-${slide.id}`}
                name="radio-card"
                checked={currentSlide === slide.id}
                onChange={() => goToSlide(slide.id)}
              />
              <article 
                className="card" 
                style={{ "--angle": slide.angle }}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1000"
              >
                <img 
                  className="card-img" 
                  src={slide.img} 
                  alt={`Decoración ${slide.id}`}
                />
                <div className="card-data">
                  <span className="card-num">
                    {slide.id}/{totalSlides}
                  </span>
                  <footer>
                    <label
                      htmlFor={`radio-${slide.id === 1 ? totalSlides : slide.id - 1}`}
                      aria-label="Previous"
                      onClick={(e) => {
                        e.preventDefault();
                        goToPrevSlide();
                      }}
                    >
                      &#10094;
                    </label>
                    <label
                      htmlFor={`radio-${slide.id === totalSlides ? 1 : slide.id + 1}`}
                      aria-label="Next"
                      onClick={(e) => {
                        e.preventDefault();
                        goToNextSlide();
                      }}
                    >
                      &#10095;
                    </label>
                  </footer>
                </div>
              </article>
            </React.Fragment>
          ))}
        </div>
  
        <div
  className="hero-card"
  data-aos="fade-down"
  data-aos-duration="1000"
>
  <h1 className="hero-title">
    Transformamos celebraciones en recuerdos inolvidables
  </h1>

  <div className="hero-divider"></div>

  <p className="hero-text">
    Diseñamos decoraciones con globos para eventos especiales y corporativos.
    Creamos experiencias únicas, elegantes y llenas de color, pensadas para
    sorprender y emocionar.
  </p>
</div>

      </div>
    </div>
  );
}