import {Button} from '@/components/ui/Button';
import {Checkbox} from '@/components/ui/Checkbox';
import TasksService from '@/services/tasks.service';
import locales from '@/shared/locales';
import {Task as TaskType} from '@/shared/types/main';
import {cn} from '@/shared/utils/styles';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {Trash2} from 'lucide-react';
import {useSession} from 'next-auth/react';
import {useEffect, useState} from 'react';
import toast from 'react-hot-toast';

interface TaskProps {
  data: TaskType;
}

export default function Task({data}: TaskProps) {
  const session = useSession();
  const queryClient = useQueryClient();

  const [task, setTask] = useState<TaskType>(data);

  const toggleTaskMutation = useMutation({
    mutationFn: ({task, isCompleted}: {task: TaskType; isCompleted: boolean}) =>
      TasksService.updateTask({
        userId: session!.data!.user!.id!,
        updatedTask: {
          ...task,
          is_completed: isCompleted,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
    onError: error => {
      console.error(error);
      toast.error(locales.errors.tasks.toggleError);
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: (taskId: string) =>
      TasksService.deleteTask({
        userId: session!.data!.user!.id!,
        taskId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
    onError: error => {
      console.error(error);
      toast.error(locales.errors.tasks.deleteError);
    },
  });

  const handleToggleTask = () => {
    setTask({
      ...task,
      is_completed: !task.is_completed,
    });

    toggleTaskMutation.mutate({
      task,
      isCompleted: !task.is_completed,
    });
  };

  useEffect(() => {
    setTask(data);
  }, [data]);

  return (
    <div className={cn('flex gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors', !!task?.description ? 'items-start' : 'items-center')}>
      <Checkbox
        checked={task.is_completed}
        onCheckedChange={handleToggleTask}
        className="flex-shrink-0"
      />

      <div className="flex-1 flex flex-col gap-1">
        <span
          className={cn('font-medium line-clamp-1 break-all', {
            'line-through text-muted-foreground': task.is_completed,
          })}
        >
          {task.title}
        </span>

        {task.description && (
          <p
            className={cn('text-sm text-muted-foreground break-all', {
              'line-through': task.is_completed,
            })}
          >
            {task.description}
          </p>
        )}
      </div>

      <Button
        variant="ghost"
        loading={deleteTaskMutation.isPending}
        size="sm"
        onClick={() => deleteTaskMutation.mutate(task.id)}
        className="flex-shrink-0 text-destructive hover:text-destructive"
      >
        {!deleteTaskMutation.isPending && <Trash2 className="size-4 aspect-square flex-shrink-0" />}
      </Button>
    </div>
  );
}

export type {Task};
