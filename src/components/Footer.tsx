import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.mapCol}>
          <iframe
            title="Mapa CRA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.154672248459!2d-58.53206472425906!3d-34.6272858729464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb77f6f1c4a3f%3A0x8b5a0e6c2b2b7a93!2sCervantes%202481%2C%20C1417%20CABA!5e0!3m2!1ses-419!2sar!4v1682897753515!5m2!1ses-419!2sar"
            width="100%"
            height="160"
            style={{ border: 0, borderRadius: '12px', minWidth: 200, minHeight: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={styles.dataCol}>
          <div className={styles.contactSection}>
            <div className={styles.contactItem}>
              <img src="/location.svg" alt="Ubicación" width={22} height={22} style={{verticalAlign:'middle',marginRight:8}} />
              <a href="https://goo.gl/maps/9r4T2kz2sE4e5rKj7" target="_blank" rel="noopener" className={styles.contactLink}>
                Cervantes 2481 - Villa Devoto - CABA
              </a>
            </div>
            <div className={styles.contactItem}>
              <img src="/whatsapp.svg" alt="WhatsApp" width={22} height={22} style={{verticalAlign:'middle',marginRight:8}} />
              <a
                href="https://wa.me/541156572275?text=Hola!%20Quiero%20hacer%20una%20consulta%20sobre%20el%20Centro%20Rinc%C3%B3n%20de%20Amigos."
                target="_blank"
                rel="noopener"
                className={styles.contactLink}
              >
                11-5657-2275 (WhatsApp)
              </a>
            </div>
            <div className={styles.contactItem}>
              <img src="/email.svg" alt="Mail" width={22} height={22} style={{verticalAlign:'middle',marginRight:8}} />
              <a href="mailto:centrorincondeamigos.vd@gmail.com" className={styles.contactLink}>
                centrorincondeamigos.vd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialsRow}>
        <a href="https://www.instagram.com/centrorincondeamigos/" target="_blank" rel="noopener" aria-label="Instagram" className={styles.socialBtn}>
          <img src="/instagram.svg" alt="Instagram" width={44} height={44} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61562706943114" target="_blank" rel="noopener" aria-label="Facebook" className={styles.socialBtn}>
          <img src="/facebook.svg" alt="Facebook" width={44} height={44} />
        </a>
        <a href="https://wa.me/541156572275?text=Hola!%20Quiero%20hacer%20una%20consulta%20sobre%20el%20Centro%20Rinc%C3%B3n%20de%20Amigos." target="_blank" rel="noopener" aria-label="WhatsApp" className={styles.socialBtn}>
          <img src="/whatsapp.svg" alt="WhatsApp" width={44} height={44} />
        </a>
      </div>
    </footer>
  );
}
