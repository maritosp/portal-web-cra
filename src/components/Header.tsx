"use client";
import Link from "next/link";

import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/talleres", label: "Talleres" },
  { href: "/salon", label: "Salón" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoMenu}>
        <Link href="/" aria-label="Ir al inicio">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src="/moodboard-portal-cra.png"
              alt="Centro Rincón de Amigos"
              width={96}
              height={96}
              className={styles.logo}
              draggable={false}
            />

          </span>
        </Link>

      </div>
      <button
        className={styles.hamburger}
        aria-label="Abrir menú"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
