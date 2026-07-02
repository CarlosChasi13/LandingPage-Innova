import { tools } from '../lib/tools';

export default function TechMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...tools, ...tools].map((tool, i) => (
          <div key={i} className="marquee-item">
            <tool.icon className="w-8 h-8" />
            {tool.name}
          </div>
        ))}
      </div>
    </div>
  );
}
