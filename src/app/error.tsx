"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#fff7e6' }}>
      <h1 style={{ color: '#ff8a65', fontSize: '2.2rem', marginBottom: '1.2rem' }}>¡Uy! Ocurrió un error</h1>
      <p style={{ color: '#393939', fontSize: '1.15rem', marginBottom: '1.5rem' }}>{error.message || 'Algo salió mal. Por favor, intenta refrescar la página.'}</p>
      <button onClick={() => reset()} style={{ background: '#ff8a65', color: '#fff', border: 'none', borderRadius: '1.5rem', padding: '0.7rem 2rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>
        Reintentar
      </button>
    </div>
  );
}
