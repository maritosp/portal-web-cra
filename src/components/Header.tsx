"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/talleres", label: "Talleres" },
  { href: "/actividades", label: "Actividades" },
  { href: "/salon", label: "Salón" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoMenu}>
        <Link href="/">
          <Image
            src="/moodboard-portal-cra.jpg"
            alt="Centro Rincón de Amigos"
            width={48}
            height={48}
            className={styles.logo}
          />
        </Link>
        <button
          className={styles.hamburger}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
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
