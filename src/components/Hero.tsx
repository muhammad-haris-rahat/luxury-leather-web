import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-leather-dark">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1920')"
        }}
      />
      <div className="relative z-10 text-center text-leather-beige px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Premium Leather Craftsmanship
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-leather-tan">
          Discover our collection of handcrafted leather jackets and belts
        </p>
        <Link to="/shop">
          <Button size="lg" className="bg-gold hover:bg-gold-muted text-leather-dark font-semibold">
            Shop Collection
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
