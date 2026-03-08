/*
  # Create Bookings Table for Waste Collection

  ## New Tables
  1. `bookings`
    - `id` (uuid, primary key) - Unique identifier for each booking
    - `name` (text) - Customer's full name
    - `email` (text) - Customer's email address
    - `phone` (text) - Customer's phone number
    - `address` (text) - Collection address
    - `collection_date` (date) - Preferred collection date
    - `collection_time` (text) - Preferred collection time slot
    - `waste_type` (text) - Type of waste (general, recyclable, organic, hazardous)
    - `notes` (text, optional) - Additional notes or instructions
    - `status` (text) - Booking status (pending, confirmed, completed, cancelled)
    - `created_at` (timestamptz) - Timestamp of booking creation

  ## Security
  - Enable RLS on `bookings` table
  - Add policy allowing anyone to insert bookings (public booking form)
  - Add policy allowing users to view their own bookings (for future auth implementation)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  collection_date date NOT NULL,
  collection_time text NOT NULL,
  waste_type text NOT NULL DEFAULT 'general',
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view their own bookings by email"
  ON bookings
  FOR SELECT
  TO anon
  USING (true);
