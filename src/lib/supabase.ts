import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  collection_date: string;
  collection_time: string;
  waste_type: string;
  notes?: string;
  status?: string;
  created_at?: string;
}
