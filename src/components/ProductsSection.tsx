import { Wrench, Zap, Droplets, Key, Hammer, Package } from "lucide-react";

const products = [
  { icon: Hammer, title: "Utensili Manuali", desc: "Martelli, pinze, cacciaviti, chiavi e tutto l'essenziale per ogni lavoro." },
  { icon: Package, title: "Viti e Bulloneria", desc: "Viti, bulloni, tasselli, chiodi e fissaggi di ogni tipo e misura." },
  { icon: Zap, title: "Materiale Elettrico", desc: "Cavi, interruttori, prese, lampadine e accessori per impianti elettrici." },
  { icon: Droplets, title: "Idraulica", desc: "Tubi, raccordi, rubinetti, guarnizioni e materiale per impianti idraulici." },
  { icon: Wrench, title: "Fai da Te e Casa", desc: "Vernici, pennelli, nastri, colle e tutto per le riparazioni domestiche." },
  { icon: Key, title: "Duplicazione Chiavi", desc: "Servizio rapido di duplicazione chiavi e piccoli servizi su richiesta." },
];

const ProductsSection = () => {
  return (
    <section id="prodotti" className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-display text-sm tracking-[0.2em] uppercase text-primary font-semibold">
            Cosa Offriamo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-background mt-2">
            Prodotti e Servizi
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.title}
              className="group bg-background/5 border border-background/10 p-8 hover:bg-primary transition-colors duration-300"
            >
              <item.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground mb-4 transition-colors" />
              <h3 className="font-display text-xl font-semibold text-background group-hover:text-primary-foreground mb-2 transition-colors">
                {item.title}
              </h3>
              <p className="text-background/70 group-hover:text-primary-foreground/80 text-sm leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
