import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    if (orderId) fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    const { data } = await supabase
      .from('orders')
      .select('*, customers(*), order_items(*, products(*))')
      .eq('id', orderId)
      .single();
    
    if (data) setOrder(data);
  };

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          
          <Card className="text-left mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Order Details</h2>
              <p className="mb-2"><strong>Order ID:</strong> {order.id}</p>
              <p className="mb-2"><strong>Customer:</strong> {order.customers.name}</p>
              <p className="mb-2"><strong>Email:</strong> {order.customers.email}</p>
              <p className="mb-4"><strong>Total:</strong> ${order.total_amount}</p>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Items:</h3>
                {order.order_items.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm mb-2">
                    <span>{item.products.name} ({item.size}) x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-4 justify-center">
            <Link to="/shop">
              <Button>Continue Shopping</Button>
            </Link>
            <Link to="/">
              <Button variant="outline">Go to Home</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
