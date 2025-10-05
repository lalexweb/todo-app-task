import {TosPage} from '@/shared/types/main';
import {createSupabaseClient} from '@/shared/utils/api';
import {PostgrestSingleResponse} from '@supabase/supabase-js';

const PagesService = {
  getLatestTosPage: async (): Promise<PostgrestSingleResponse<TosPage[]>> => {
    const supabase = createSupabaseClient();

    const response = await supabase
      .from('tos_pages')
      .select('*')
      .order('created_at', {
        ascending: false,
      })
      .limit(1);

    return response as PostgrestSingleResponse<TosPage[]>;
  },
};

export default PagesService;
