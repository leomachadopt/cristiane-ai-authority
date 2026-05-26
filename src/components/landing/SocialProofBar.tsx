import { Award, Wind, Mic, Link2 } from "lucide-react";

const items = [
  { icon: Award, strong: "25 anos", text: "de experiência clínica" },
  { icon: Wind, strong: "Metodologia RC360", text: "exclusiva e proprietária" },
  { icon: Mic, strong: "Podcast Família 360", text: "Saúde Integrada" },
  { icon: Link2, strong: "Equipa integrada", text: "multidisciplinar" },
];

const SocialProofBar = () => {
  return (
    <div className="bg-white border-b border-border/60 py-9 px-6">
      <div className="container max-w-5xl flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {items.map((item, i) => (
          <div key={item.strong} className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-ouro shrink-0" />
              <div className="text-[13px] text-muted-foreground leading-tight">
                <strong className="block text-[15px] font-bold text-azul">{item.strong}</strong>
                {item.text}
              </div>
            </div>
            {i < items.length - 1 && <div className="hidden md:block w-px h-9 bg-border" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofBar;
