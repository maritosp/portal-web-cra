import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

interface ActividadCardProps {
  titulo: string;
  fecha: string;
  descripcion: string;
}

export default function ActividadCard({ titulo, fecha, descripcion }: ActividadCardProps) {
  return (
    <div className="actividad-card">
      <div className="actividad-banner">
        <FaCalendarAlt className="actividad-icon" />
        <span className="actividad-fecha">{fecha}</span>
      </div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}
