import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // From your Supabase project settings
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // From your Supabase project settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
