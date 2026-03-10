import galleryTools from "@/assets/gallery-tools.jpg";
import galleryFasteners from "@/assets/gallery-fasteners.jpg";
import galleryDiy from "@/assets/gallery-diy.jpg";
import heroStore from "@/assets/hero-store.jpg";

const images = [
  { src: heroStore, alt: "Interno del negozio", span: "md:col-span-2" },
  { src: galleryTools, alt: "Utensili ed attrezzi", span: "" },
  { src: galleryFasteners, alt: "Viteria e bulloneria", span: "" },
  { src: galleryDiy, alt: "Prodotti fai da te", span: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="galleria" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-display text-sm tracking-[0.2em] uppercase text-secondary font-semibold">
            Il Nostro Negozio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Galleria
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden group ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
