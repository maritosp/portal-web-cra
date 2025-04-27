import React from "react";
import Image from "next/image";

interface TestimonioCardProps {
  nombre: string;
  rol: string;
  frase: string;
  imagen: string;
}

export default function TestimonioCard({ nombre, rol, frase, imagen }: TestimonioCardProps) {
  return (
    <blockquote className="testimonio">
      <Image src={imagen} alt={nombre} width={56} height={56} className="testimonio-img" />
      <div className="testimonio-text">
        <span className="testimonio-quote">{frase}</span>
        <span className="testimonio-nombre">{nombre}</span>
        <span className="testimonio-rol">{rol}</span>
      </div>
    </blockquote>
  );
}
