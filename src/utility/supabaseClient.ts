import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://qketwbnxgzblpdbyoqiq.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrZXR3Ym54Z3pibHBkYnlvcWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjY4NzIsImV4cCI6MTk5Mzk0Mjg3Mn0.9AXskxA86pwcpkTuGHXvgndU15ibVxM913pRQSEtfLo";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
    db: {
        schema: "public",
    },
    auth: {
        persistSession: true,
    },
});
