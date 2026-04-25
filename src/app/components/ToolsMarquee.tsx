import { tools } from '../lib/tools';

export function ToolsMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...tools, ...tools].map((tool, i) => (
          <div key={i} className="marquee-item">
            <tool.icon className="w-8 h-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
