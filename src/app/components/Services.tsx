const SERVICES = [
  { num: '01', icon: '🎨', title: 'Diseño UI/UX', desc: 'Interfaces pensadas para convertir visitantes en clientes. Figma, prototipado y sistemas de diseño escalables.' },
  { num: '02', icon: '⚡', title: 'Desarrollo Web', desc: 'Aplicaciones con React, Next.js y Node.js. Código limpio, testeable y listo para producción desde el día uno.' },
  { num: '03', icon: '🛒', title: 'E-Commerce', desc: 'Tiendas online que venden. Shopify, WooCommerce o solución personalizada con pagos y logística integrada.' },
  { num: '04', icon: '🔐', title: 'Plataformas SaaS', desc: 'Arquitectura backend robusta, autenticación, multi-tenancy y dashboards de administración a medida.' },
  { num: '05', icon: '🚀', title: 'Optimización & SEO', desc: 'Core Web Vitals en verde, tiempo de carga bajo 1 segundo y posicionamiento orgánico desde la arquitectura.' },
  { num: '06', icon: '🤖', title: 'Integración IA', desc: 'Chatbots, automatizaciones y flujos inteligentes con LLMs integrados directamente en tu producto web.' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">Servicios</div>
          <h2>Todo lo que<br />tu negocio <em>necesita</em></h2>
        </div>
        <p className="section-desc">Desde la estrategia hasta el lanzamiento, cubrimos cada etapa del desarrollo digital con precisión técnica.</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div key={s.num} className={`service-card reveal${i % 3 ? ` reveal-delay-${i % 3}` : ''}`}>
            <div className="service-num">{s.num}</div>
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <p className="service-desc">{s.desc}</p>
            <a href="#" className="service-link">Conocer más</a>
          </div>
        ))}
      </div>
    </section>
  );
}
