import {createClient} from '@supabase/supabase-js';

export const createSupabaseClient = (userId?: string) => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: {
      persistSession: false,
    },
    global: {
      headers: userId
        ? {
            'x-user-id': userId,
          }
        : undefined,
    },
  });
};
