export default function LeadSection() {
  return (
    <section id="lead">
      <div className="lead-orb" />
      <div className="lead-content">
        <div className="lead-badge">Proyectos desde $1,500 USD</div>
        <h2 className="reveal">Tu próxima plataforma<br />comienza <em>hoy</em></h2>
        <p className="lead-sub reveal reveal-delay-1">Cuéntanos tu idea. En 24 horas tienes una propuesta técnica detallada y sin compromiso.</p>
        <div className="lead-form reveal reveal-delay-2">
          <input type="email" className="lead-input" placeholder="tu@empresa.com" />
          <button className="btn-primary">Solicitar propuesta →</button>
        </div>
      </div>
    </section>
  );
}
