'use client';

import AddTaskForm from '@/components/pages/app/AddTaskForm';
import Task from '@/components/pages/app/Task';
import TaskSkeleton from '@/components/pages/app/TaskSkeleton';
import TasksService from '@/services/tasks.service';
import locales from '@/shared/locales';
import {useQuery} from '@tanstack/react-query';
import {useSession} from 'next-auth/react';

export default function AppPage() {
  const session = useSession();

  const tasksQuery = useQuery({
    queryKey: ['tasks', session.data?.user?.id],
    queryFn: () =>
      TasksService.getTasks({
        userId: session!.data!.user!.id!,
      }),
    enabled: !!session.data?.user?.id,
  });

  return (
    <div className="container">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{locales.pages.app.title}</h1>

        <AddTaskForm />

        <div className="flex flex-col gap-2">
          {!session?.data?.user?.id || tasksQuery?.isLoading ? (
            Array.from({
              length: 5,
            }).map((_, index) => <TaskSkeleton key={index} />)
          ) : !tasksQuery?.data?.data?.length ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>{locales.pages.app.noTasks}</p>
            </div>
          ) : (
            tasksQuery?.data?.data?.map(task => (
              <Task
                key={task.id}
                data={task}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
