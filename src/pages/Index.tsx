import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const getTotalItems = useCart((state) => state.getTotalItems);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .limit(4);
    
    if (data) setFeaturedProducts(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemsCount={getTotalItems()} />
      
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Products</h2>
        <p className="text-center text-muted-foreground mb-12">
          Handpicked selection of our finest leather goods
        </p>
        
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image_url}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">No featured products available</p>
        )}
        
        <div className="text-center">
          <Link to="/shop">
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </section>
      
      <section className="bg-leather-dark text-leather-beige py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg mb-8">
              Every piece we create represents decades of refined craftsmanship and an unwavering dedication to quality. We source the finest materials and employ time-honored techniques to ensure that each product is built to last a lifetime.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-leather-beige text-leather-beige hover:bg-leather-beige hover:text-leather-dark">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
