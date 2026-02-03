import historia from "../assets/logo/historia.png";
import "../assets/css/about.css";

export default function About() {
  const milestones = [
    {
      year: "Inicio",
      title: "Pequeñas Celebraciones",
      description:
        "Todo comenzó decorando pequeñas celebraciones para familiares y amigos, con globos, creatividad y muchas ganas de sorprender.",
    },
    {
      year: "Crecimiento",
      title: "Eventos Corporativos",
      description:
        "Nuestras decoraciones empezaron a llamar la atención y pronto llegamos a eventos más grandes, incluso para empresas.",
    },
    {
      year: "2018",
      title: "Certificación MBP",
      description:
        "Nos certificamos como Master Balloon Professional (MBP) en Serpentex, una distinción que reconoce la excelencia.",
    },
    {
      year: "Hoy",
      title: "Experiencias Inolvidables",
      description:
        "Seguimos transformando ideas en experiencias inolvidables, con la misma pasión con la que empezamos.",
    },
  ];

  return (
    <section className="section2" id="about">
      <div className="aboutLayout">
        {/* Header */}
        <div className="aboutHeader" data-aos="zoom-in">
          <img
            src={historia}
            alt="Historia de Globo Arte"
            className="aboutTitleImg"
          />
          <div className="aboutDivider"></div>
          <p className="subtitulo">
            Un recorrido por nuestra trayectoria llena de color y alegría
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <span className="timelineLine"></span>

          {milestones.map((item, index) => (
            <div
              key={index}
              className={`timelineItem ${
                index % 2 === 0 ? "left" : "right"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timelineCard">
                <span className="timelineYear">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="timelineDot"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
