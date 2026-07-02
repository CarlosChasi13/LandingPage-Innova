const TECHS = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS', 'Figma to Code'];

export default function TechMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {Array.from({ length: 4 }, () => TECHS).flat().map((m, i) => (
          <div key={i} className="marquee-item">{m}</div>
        ))}
      </div>
    </div>
  );
}
