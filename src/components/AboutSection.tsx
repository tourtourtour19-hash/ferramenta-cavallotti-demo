import heroImage from "@/assets/hero-store.jpg";

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-display text-sm tracking-[0.2em] uppercase text-secondary font-semibold">Chi Siamo</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              La Vostra Ferramenta<br />di Quartiere
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ferramenta Cavallotti è un punto di riferimento per la comunità di Sesto San Giovanni. 
              Da anni serviamo i nostri clienti con passione, offrendo un'ampia gamma di utensili, 
              materiali per il fai da te, articoli per la casa e molto altro.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Il nostro staff esperto è sempre pronto a consigliarvi il prodotto giusto per ogni 
              vostro progetto, dalla piccola riparazione domestica alla ristrutturazione completa. 
              Venite a trovarci: troverete competenza, cortesia e i migliori prodotti a prezzi giusti.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="font-display text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Anni di esperienza</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Prodotti disponibili</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Clienti soddisfatti</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Interno Ferramenta Cavallotti"
              className="w-full h-[400px] object-cover shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
