import {Task} from '@/shared/types/main';
import {createSupabaseClient} from '@/shared/utils/api';
import {PostgrestSingleResponse} from '@supabase/supabase-js';

const TasksService = {
  getTasks: async ({userId}: {userId: string}): Promise<PostgrestSingleResponse<Task[]>> => {
    const supabase = createSupabaseClient(userId);

    const response = await supabase.from('tasks').select('*').order('created_at', {
      ascending: false,
    });

    return response as PostgrestSingleResponse<Task[]>;
  },

  addTask: async ({userId, task}: {userId: string; task: Omit<Task, 'id' | 'created_at' | 'is_completed'>}): Promise<PostgrestSingleResponse<Task>> => {
    const supabase = createSupabaseClient(userId);

    const response = await supabase.from('tasks').insert({
      ...task,
      user_id: userId,
    });

    return response as PostgrestSingleResponse<Task>;
  },

  updateTask: async ({userId, updatedTask}: {userId: string; updatedTask: Task}): Promise<PostgrestSingleResponse<Task>> => {
    const supabase = createSupabaseClient(userId);

    const response = await supabase.from('tasks').update(updatedTask).eq('id', updatedTask.id);

    return response as PostgrestSingleResponse<Task>;
  },

  deleteTask: async ({userId, taskId}: {userId: string; taskId: string}): Promise<PostgrestSingleResponse<Task>> => {
    const supabase = createSupabaseClient(userId);

    const response = await supabase.from('tasks').delete().eq('id', taskId);

    return response as PostgrestSingleResponse<Task>;
  },
};

export default TasksService;
