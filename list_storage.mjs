import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function listFiles() {
  const { data: certs, error: err1 } = await supabase.storage.from('portfolio-assets').list('Certificate');
  if (err1) console.error("Error listing Certificate:", err1);
  else console.log("Certificates:", certs);

  const { data: resume, error: err2 } = await supabase.storage.from('portfolio-assets').list('Resume');
  if (err2) console.error("Error listing Resume:", err2);
  else console.log("Resume:", resume);
}

listFiles();
