'use client';

import {addTask} from '@/components/pages/app/actions';
import {TaskFormData, taskSchema} from '@/components/pages/app/schema';
import {Button} from '@/components/ui/Button';
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/Form';
import {Input} from '@/components/ui/Input';
import {Textarea} from '@/components/ui/Textarea';
import locales from '@/shared/locales';
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useSession} from 'next-auth/react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

export default function AddTaskForm() {
  const session = useSession();
  const queryClient = useQueryClient();

  const methods = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const addTaskMutation = useMutation({
    mutationFn: (values: TaskFormData) => {
      return addTask(session!.data!.user!.id!, values);
    },
    onError: error => {
      console.error(error);
      toast.error(locales.errors.tasks.addError);
    },
    onSuccess: data => {
      if (!data.success && data.message) {
        toast.error(data.message);
      }

      methods.reset();

      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
  });

  const onSubmit = async (values: TaskFormData) => {
    await addTaskMutation.mutateAsync(values);
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 max-w-lg w-full"
      >
        <FormField
          control={methods.control}
          name="title"
          render={({field}) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input
                  placeholder={locales.pages.app.fields.title.placeholder}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="description"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={locales.pages.app.fields.description.placeholder}
                  className="resize-none"
                  rows={2}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          loading={methods.formState.isSubmitting}
        >
          {locales.pages.app.addTask}
        </Button>
      </form>
    </Form>
  );
}
