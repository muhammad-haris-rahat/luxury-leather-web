-- Disable RLS on checkout tables for public guest checkout
-- This is appropriate for an e-commerce site with guest checkout

ALTER TABLE public.customers DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items DISABLE ROW LEVEL SECURITY;