import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contatti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-display text-sm tracking-[0.2em] uppercase text-secondary font-semibold">
            Dove Siamo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Contattaci
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Indirizzo</h3>
                <p className="text-muted-foreground">Via Felice Cavallotti 89<br />20099 Sesto San Giovanni (MI), Italia</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Telefono</h3>
                <p className="text-muted-foreground">+39 02 0000 0000</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-foreground flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Orari di Apertura</h3>
                <div className="text-muted-foreground text-sm space-y-1 mt-1">
                  <p>Lunedì - Venerdì: 8:30 – 12:30 / 15:00 – 19:00</p>
                  <p>Sabato: 8:30 – 12:30</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="w-full h-80 md:h-full min-h-[320px]">
            <iframe
              title="Mappa Ferramenta Cavallotti"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.5!2d9.2262!3d45.5347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMyJzA1LjAiTiA5wrAxMyczNC4wIkU!5e0!3m2!1sit!2sit!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
