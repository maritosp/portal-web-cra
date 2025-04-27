import React from "react";

interface TallerCardProps {
  titulo: string;
  horario: string;
  descripcion: string;
  onInscribirse?: () => void;
}

export default function TallerCard({ titulo, horario, descripcion, onInscribirse }: TallerCardProps) {
  return (
    <div className="taller-card">
      <h3>{titulo}</h3>
      <span className="taller-horario">{horario}</span>
      <p>{descripcion}</p>
      <button className="btn-inscribirse" onClick={onInscribirse}>Inscribirse</button>
    </div>
  );
}
