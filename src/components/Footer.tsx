import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div>
          <strong>Centro Rincón de Amigos</strong><br />
          Calle Ejemplo 123, Barrio X, Ciudad Y<br />
          WhatsApp: <a href="https://wa.me/5491112345678" target="_blank" rel="noopener">+54 9 11 1234-5678</a><br />
          Email: <a href="mailto:info@rincondeamigos.org">info@rincondeamigos.org</a>
        </div>
        <div className={styles.socials}>
          <a href="https://instagram.com/tu_instagram" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="/instagram.svg" alt="Instagram" width={28} height={28} />
          </a>
          <a href="https://facebook.com/tu_facebook" target="_blank" rel="noopener" aria-label="Facebook">
            <img src="/facebook.svg" alt="Facebook" width={28} height={28} />
          </a>
        </div>
      </div>
      <div className={styles.mapCopyright}>
        <iframe
          title="Mapa CRA"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-58.3816,-34.6037,-58.3816,-34.6037&amp;layer=mapnik"
          width="180"
          height="80"
          style={{ border: 0 }}
          loading="lazy"
        />
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Centro Rincón de Amigos. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
