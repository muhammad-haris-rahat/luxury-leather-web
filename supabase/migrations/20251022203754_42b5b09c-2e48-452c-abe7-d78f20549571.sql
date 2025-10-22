-- Fix RLS policies to allow public checkout without authentication

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Anyone can create customers" ON customers;
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
DROP POLICY IF EXISTS "Anyone can create order items" ON order_items;

-- Create permissive policies for public checkout
CREATE POLICY "Allow public customer creation"
  ON customers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public order creation"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public order items creation"
  ON order_items
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow reading orders for confirmation page
CREATE POLICY "Allow public order reading"
  ON orders
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public order items reading"
  ON order_items
  FOR SELECT
  TO public
  USING (true);