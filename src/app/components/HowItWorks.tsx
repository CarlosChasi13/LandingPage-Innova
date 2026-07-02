const STEPS = [
  { num: '01', title: 'Descubrimiento y estrategia', desc: 'Entendemos tu negocio, tu mercado y tus objetivos. Definimos el stack tecnológico, los KPIs y el roadmap de entrega.' },
  { num: '02', title: 'Diseño y prototipado', desc: 'Wireframes de alta fidelidad en Figma con revisiones semanales. Apruebas cada pantalla antes de que se escriba una línea de código.' },
  { num: '03', title: 'Desarrollo iterativo', desc: 'Sprints de 2 semanas con entregables reales. Acceso a staging para que puedas ver y probar el avance en tiempo real.' },
  { num: '04', title: 'Lanzamiento y soporte', desc: 'Deploy en producción con monitoreo 24/7. Plan de soporte post-lanzamiento para que nada detenga tu crecimiento.' },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">Proceso</div>
          <h2>Cómo <em>trabajamos</em><br />contigo</h2>
        </div>
        <p className="section-desc">Un proceso claro y transparente. Sabes exactamente qué pasa en cada etapa de tu proyecto.</p>
      </div>

      <div className="how-grid">
        <div className="how-visual reveal">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <line x1="0" y1="240" x2="400" y2="240" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <line x1="0" y1="320" x2="400" y2="320" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <line x1="80" y1="0" x2="80" y2="400" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <line x1="160" y1="0" x2="160" y2="400" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <line x1="240" y1="0" x2="240" y2="400" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <line x1="320" y1="0" x2="320" y2="400" stroke="rgba(11,45,74,0.08)" strokeWidth="1" />
            <path d="M 80 80 Q 200 80 200 200 Q 200 320 320 320" stroke="rgba(0,188,242,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite" />
            </path>
            <circle cx="80" cy="80" r="12" fill="#00BCF2" opacity="0.9">
              <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="200" r="12" fill="#00BCF2" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="320" r="12" fill="#00BCF2" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <text x="100" y="85" fill="rgba(11,45,74,0.55)" fontSize="11" fontFamily="DM Mono, monospace">DISCOVERY</text>
            <text x="220" y="205" fill="rgba(11,45,74,0.55)" fontSize="11" fontFamily="DM Mono, monospace">BUILD</text>
            <text x="200" y="325" fill="rgba(11,45,74,0.55)" fontSize="11" fontFamily="DM Mono, monospace">LAUNCH →</text>
          </svg>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.num} className={`step reveal${i ? ` reveal-delay-${i}` : ''}`}>
              <div className="step-num-wrap">{s.num}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
