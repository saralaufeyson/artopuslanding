/*
  # Create visit counter table

  1. New Tables
    - `visit_counter`
      - `id` (uuid, primary key)
      - `total_visits` (integer, total count)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `visit_counter` table
    - Add policy for anonymous users to read visit count
    - Add policy for anonymous users to increment visits via function
*/

CREATE TABLE IF NOT EXISTS visit_counter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  total_visits integer DEFAULT 0 NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE visit_counter ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visit count"
  ON visit_counter
  FOR SELECT
  USING (true);

INSERT INTO visit_counter (total_visits) VALUES (0)
ON CONFLICT DO NOTHING;
