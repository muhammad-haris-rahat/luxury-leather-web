-- Clean up unused RLS policies since we disabled RLS for guest checkout
DROP POLICY IF EXISTS "Enable insert for anon users" ON customers;
DROP POLICY IF EXISTS "Enable insert for anon users" ON orders;
DROP POLICY IF EXISTS "Enable insert for anon users" ON order_items;
DROP POLICY IF EXISTS "Enable read for anon users" ON orders;
DROP POLICY IF EXISTS "Enable read for anon users" ON order_items;