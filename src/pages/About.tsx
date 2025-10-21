import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

const About = () => {
  const getTotalItems = useCart((state) => state.getTotalItems);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemsCount={getTotalItems()} />
      
      <main className="flex-1">
        <div className="bg-leather-dark text-leather-beige py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Crafting premium leather goods with passion and precision since 2020
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Premium Craftsmanship</h2>
              <p className="text-muted-foreground mb-4">
                At Luxe Leather, we believe in the timeless beauty of genuine leather. Each piece in our collection is meticulously handcrafted by skilled artisans who have perfected their craft over decades.
              </p>
              <p className="text-muted-foreground">
                We source only the finest leather from sustainable suppliers, ensuring that every jacket and belt we create is not just a product, but a work of art that tells a story.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
                alt="Leather craftsmanship"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"
                alt="Quality materials"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Quality Materials</h2>
              <p className="text-muted-foreground mb-4">
                We pride ourselves on using only premium, full-grain leather that ages beautifully over time. Our commitment to quality means that each piece is built to last, developing its own unique character with every wear.
              </p>
              <p className="text-muted-foreground">
                From classic designs to contemporary styles, our collection represents the perfect fusion of traditional craftsmanship and modern aesthetics.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
