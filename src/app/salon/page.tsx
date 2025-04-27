export default function Salon() {
  return (
    <main className="salon-section">
      <h1 className="salon-title">Nuestro Salón</h1>
      <div className="salon-galeria">
        {/* Puedes reemplazar estas imágenes por fotos reales del salón */}
        <img src="/salon-1-1600x900.jpg" alt="Salón CRA 1" className="salon-img" />
        <img src="/salon-2-1600x900.jpg" alt="Salón CRA 2" className="salon-img" />
      </div>
      <p className="salon-desc">
        Un espacio amplio, luminoso y versátil para encuentros, talleres, eventos familiares y comunitarios. Consultanos para conocer más detalles y disponibilidad.
      </p>
      <a href="/contacto" className="btn-salon-contacto">Contactanos</a>
    </main>
  );
}
