import heroImage from "@/assets/hero-store.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Ferramenta Cavallotti interno negozio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <div className="inline-block bg-primary px-6 py-2 mb-6">
          <span className="font-display text-sm tracking-[0.3em] uppercase text-primary-foreground font-semibold">
            Dal cuore di Sesto San Giovanni
          </span>
        </div>
        <h1 className="font-brand text-5xl md:text-7xl lg:text-8xl text-secondary mb-4 leading-tight">
          FERRAMENTA<br />CAVALLOTTI
        </h1>
        <p className="font-display text-lg md:text-xl text-primary mb-8 max-w-xl mx-auto tracking-wide uppercase">
          Il tuo ferramenta di fiducia a Sesto San Giovanni. Utensili, materiali e consigli per ogni progetto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contatti"
            className="inline-block bg-primary text-primary-foreground font-display uppercase tracking-wider text-sm px-8 py-4 hover:bg-primary/90 transition-colors font-semibold"
          >
            Vieni a Trovarci
          </a>
          <a
            href="tel:+390200000000"
            className="inline-block border-2 border-secondary bg-secondary text-secondary-foreground font-display uppercase tracking-wider text-sm px-8 py-4 hover:bg-secondary/80 transition-colors font-semibold"
          >
            Chiamaci Ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
