import Image from "next/image";
import TallerCard from "../components/TallerCard";
import InstagramEmbedList from "../components/InstagramEmbedList";
import TestimonioCard from "../components/TestimonioCard";

// Datos simulados para talleres y actividades (luego serán dinámicos)
const talleres = [
  { titulo: "Arte para Niñxs", horario: "Lunes 17:30", descripcion: "Exploración artística y creatividad para chicos y chicas de 6 a 12 años." },
  { titulo: "Teatro Adultos", horario: "Miércoles 19:00", descripcion: "Técnicas teatrales, juegos y expresión para adultos de todas las edades." }
];

const actividades = [
  { titulo: "Feria de Libros", fecha: "10/05/2025", descripcion: "Gran feria de intercambio y venta de libros usados y nuevos." },
  { titulo: "Muestra de Talleres", fecha: "24/05/2025", descripcion: "Exposición de trabajos y presentaciones de los talleres del centro." }
];

interface Testimonio {
  nombre: string;
  rol: string;
  frase: string;
  imagen: string;
}

const testimonios: Testimonio[] = [
  {
    nombre: "Marta",
    rol: "Alumna de Arte",
    frase: "Gracias al CRA, volví a conectarme con mi pasión por la pintura y conocí gente increíble.",
    imagen: "/testimonio-1-1080x1080.jpg"
  },
  {
    nombre: "Luis",
    rol: "Profesor de Teatro",
    frase: "Un espacio único para crecer, crear y compartir. ¡Orgulloso de pertenecer!",
    imagen: "/testimonio-2-1080x1080.jpg"
  }
];

export default function Home() {
  return (
    <div className="landing-cra">
      <section className="hero-cra hero-cra-bg">
        <h1 className="hero-title">Centro Rincón de Amigos</h1>
        <span className="hero-slogan">¡Puertas abiertas al encuentro barrial!</span>
        <p className="hero-desc">
          Somos un espacio de encuentro, cultura y participación en el corazón del barrio. Promovemos talleres, actividades y eventos para todas las edades, fortaleciendo lazos, impulsando la creatividad y apostando siempre a la comunidad.
        </p>
      </section>

      {/* Sección visual del salón */}
      {/* Talleres */}
      <section className="talleres-section">
        <h2 className="talleres-title">Talleres</h2>
        <div className="talleres-listado">
          {talleres.map((taller, i) => (
            <TallerCard key={i} titulo={taller.titulo} horario={taller.horario} descripcion={taller.descripcion} />
          ))}
        </div>
      </section>

      {/* Posteos fijados de Instagram */}
      <section className="ig-section" style={{margin: '2.5rem 0 1.5rem 0'}}>
        <InstagramEmbedList postUrls={[
          // Ejemplo: reemplaza por los links o códigos de tus posteos fijados
          "https://www.instagram.com/p/Cv7Yx6nM9tH/",
          "https://www.instagram.com/p/Cw8Zy7oM1aA/",
          "https://www.instagram.com/p/Cx9A0bN2bB/"
        ]} />
      </section>

      {/* Sección visual del salón */}
      <section className="salon-section">
        <div className="salon-img-wrap">
          <img src="/salon-stock-1600x900.jpg" alt="Salón Centro Rincón de Amigos" className="salon-img" />
        </div>
        <div className="salon-info">
          <h2 className="salon-title">Nuestro Salón</h2>
          <p className="salon-desc">
            Un espacio pensado para <strong>cumpleaños</strong>, <strong>reuniones</strong> y <strong>eventos familiares</strong>, abierto a amigos y vecinos del barrio. Luminoso, versátil y acogedor, ideal para compartir buenos momentos.
          </p>
          <p className="salon-consulta">Consultanos para conocer disponibilidad y detalles.</p>
          <a href="/salon" className="btn-salon-contacto">Conocé el salón</a>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonios-section">
        <h2 className="testimonios-title">Testimonios y Comunidad</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center'}}>
          {testimonios.map((testimonio, i) => (
            <TestimonioCard key={i} nombre={testimonio.nombre} rol={testimonio.rol} frase={testimonio.frase} imagen={testimonio.imagen} />
          ))}
        </div>
      </section>


    </div>
  );
}
