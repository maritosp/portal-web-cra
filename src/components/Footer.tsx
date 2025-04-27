import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div>
          <strong>Centro Rincón de Amigos</strong><br />
          <a href="https://goo.gl/maps/9r4T2kz2sE4e5rKj7" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'underline' }}>
            Cervantes 2481 - Villa Devoto - CABA
          </a><br />
          <a
            href="https://wa.me/541156572275?text=Hola!%20Quiero%20hacer%20una%20consulta%20sobre%20el%20Centro%20Rinc%C3%B3n%20de%20Amigos."
            target="_blank"
            rel="noopener"
            style={{ color: 'inherit', textDecoration: 'underline' }}
          >
            11-5657-2275 (WhatsApp)
          </a><br />
          <a href="mailto:centrorincondeamigos.vd@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
            centrorincondeamigos.vd@gmail.com
          </a>
        </div>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/centrorincondeamigos/" target="_blank" rel="noopener" aria-label="Instagram">
            <img src="/instagram.svg" alt="Instagram" width={28} height={28} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562706943114" target="_blank" rel="noopener" aria-label="Facebook">
            <img src="/facebook.svg" alt="Facebook" width={28} height={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
