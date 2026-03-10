const CTASection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Hai un Progetto in Mente?
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
          Passa in negozio o chiamaci: il nostro team è pronto ad aiutarti con consigli, 
          prodotti e soluzioni per ogni lavoro di casa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+390200000000"
            className="inline-block bg-foreground text-background font-display uppercase tracking-wider text-sm px-8 py-4 hover:bg-foreground/90 transition-colors font-semibold"
          >
            Chiamaci: +39 02 0000 0000
          </a>
          <a
            href="#contatti"
            className="inline-block border-2 border-foreground text-foreground font-display uppercase tracking-wider text-sm px-8 py-4 hover:bg-foreground hover:text-background transition-colors font-semibold"
          >
            Come Raggiungerci
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
