export interface TosPage {
  id: string;
  content: string;
  created_at: string;
}

export interface Task {
  id: string;
  user_id?: string;
  title: string;
  description?: string;
  is_completed: boolean;
  created_at: string;
}
