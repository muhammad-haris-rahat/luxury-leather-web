-- Grant necessary permissions to anon role for checkout tables

-- Grant table access to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON public.customers TO anon;
GRANT INSERT ON public.orders TO anon;
GRANT INSERT ON public.order_items TO anon;
GRANT SELECT ON public.orders TO anon;
GRANT SELECT ON public.order_items TO anon;

-- Drop and recreate policies with explicit role specifications
DROP POLICY IF EXISTS "Allow public customer creation" ON customers;
DROP POLICY IF EXISTS "Allow public order creation" ON orders;
DROP POLICY IF EXISTS "Allow public order items creation" ON order_items;
DROP POLICY IF EXISTS "Allow public order reading" ON orders;
DROP POLICY IF EXISTS "Allow public order items reading" ON order_items;

-- Recreate policies for anon and authenticated users
CREATE POLICY "Enable insert for anon users" ON customers
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Enable insert for anon users" ON orders
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Enable insert for anon users" ON order_items
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Enable read for anon users" ON orders
  FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Enable read for anon users" ON order_items
  FOR SELECT TO anon, authenticated
  USING (true);