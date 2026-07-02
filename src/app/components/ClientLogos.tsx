const CLIENTS = ['Innovate Corp', 'Nexus Tech', 'Quantum Solutions', 'Apex Systems', 'Velocity Group', 'Zenith Digital'];

export default function ClientLogos() {
  return (
    <section id="clients">
      <p className="clients-label reveal">Empresas que confían en nosotros</p>
      <div className="clients-logos">
        {CLIENTS.map((c, i) => (
          <div key={i} className={`client-item reveal${i % 3 ? ' reveal-delay-1' : ''}`}>
            <span className="client-name">{c}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
