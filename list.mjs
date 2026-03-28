import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

const supabaseUrl = 'https://ixnzwrhuekyyrqkrvlft.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4bnp3cmh1ZWt5eXJxa3J2bGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMjg2MjQsImV4cCI6MjA1ODgwODYyNH0.J1kGEzP9OIN7o0l02cOrYh_nOfN24B8Bv7F2w58o-M0';
// Let's use the standard anon key format if the other one fails, wait, the .env actually has VITE_SUPABASE_ANON_KEY=... let's just use what's in .env using dotenv, wait dotenv doesn't work out of the box without install.

// Let's read .env file directly instead
const envFile = fs.readFileSync('.env', 'utf8');
const anonKeyMatch = envFile.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const anonKey = anonKeyMatch ? anonKeyMatch[1].trim() : '';

const supabase = createClient(supabaseUrl, anonKey);

async function listFiles() {
  const { data: certs } = await supabase.storage.from('portfolio-assets').list('Certificate');
  const { data: resume } = await supabase.storage.from('portfolio-assets').list('Resume');
  
  fs.writeFileSync('out.json', JSON.stringify({
    certs: certs ? certs.map(c => c.name) : [],
    resume: resume ? resume.map(r => r.name) : []
  }, null, 2));
}

listFiles();
