-- Add role column to users table if it doesn't exist
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS role VARCHAR(50) DEFAULT 'Customer';

-- Create enum type for roles if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        CREATE TYPE user_role AS ENUM ('Admin', 'Employee', 'Tele-sales', 'Customer', 'Accounts', 'Warehouse Manager', 'Shipping Officer', 'Delivery', 'Supervisor');
    END IF;
END $$;

-- Enable realtime for users table
alter publication supabase_realtime add table users;
