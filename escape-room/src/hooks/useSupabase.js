import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fkrltrjjxyidmaiqiomx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcmx0cmpqeHlpZG1haXFpb214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwOTMxMTcsImV4cCI6MjA2MDY2OTExN30.NGWJR1sNhiqCX0gO6vY-Ly_EakSAn5w4MTb5qv4R4xA'

export const supabase = createClient(supabaseUrl, supabaseKey)

export function useSupabase() {
  return { supabase }
}