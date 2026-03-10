import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-brand text-2xl text-secondary mb-1">FERRAMENTA CAVALLOTTI</h3>
            <p className="text-background/60 text-sm">Via Felice Cavallotti 89, Sesto San Giovanni (MI)</p>
          </div>
          {/* Social */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-11 h-11 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
            >
              <Facebook className="w-5 h-5 text-background group-hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-11 h-11 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
            >
              <Instagram className="w-5 h-5 text-background group-hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="w-11 h-11 bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
            >
              <MessageCircle className="w-5 h-5 text-background group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Ferramenta Cavallotti — Sito DEMO a scopo dimostrativo. Tutti i dati sono fittizi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
